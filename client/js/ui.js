// Reusable UI helpers: toasts, loading states, field errors
(function(){
    function ensureContainer(){
        let c = document.querySelector('.toast-container');
        if(!c){
            c = document.createElement('div');
            c.className = 'toast-container';
            document.body.appendChild(c);
        }
        return c;
    }

    function iconFor(type){
        if(type==='success') return '✔';
        if(type==='error') return '✖';
        if(type==='warning') return '⚠';
        return 'ℹ';
    }

    function showToast(type, message, opts={duration:4000}){
        const container = ensureContainer();
        const t = document.createElement('div');
        t.className = 'toast '+(type||'info');

        t.innerHTML = `
            <div class="icon">${iconFor(type)}</div>
            <div class="message">${message}</div>
            <div class="close">&times;</div>
        `;

        container.appendChild(t);

        const closeBtn = t.querySelector('.close');
        closeBtn.addEventListener('click', ()=> hideToast(t));

        const timeout = setTimeout(()=> hideToast(t), opts.duration || 4000);
        t._timeout = timeout;

        return t;
    }

    function hideToast(el){
        if(!el) return;
        clearTimeout(el._timeout);
        el.classList.add('hide');
        setTimeout(()=>{ try{ el.remove(); }catch(e){} },320);
    }

    function setLoading(btn, isLoading, text){
        if(!btn) return;
        if(isLoading){
            btn.dataset.orig = btn.innerHTML;
            btn.disabled = true;
            btn.innerHTML = `<span class="spinner" style="display:inline-block;width:16px;height:16px;border:2px solid rgba(255,255,255,0.3);border-top-color:rgba(255,255,255,0.9);border-radius:50%;margin-right:8px;animation:spin .9s linear infinite"></span>${text||'Loading...'} `;
        } else {
            btn.disabled = false;
            if(btn.dataset.orig) btn.innerHTML = btn.dataset.orig;
        }
    }

    function showFieldError(field, message){
        if(!field) return;
        const grp = field.closest('.form-group');
        if(!grp) return;
        let err = grp.querySelector('.input-error');
        if(!err){ err = document.createElement('div'); err.className='input-error'; grp.appendChild(err); }
        err.innerText = message;
        err.style.display = 'block';
        field.setAttribute('aria-invalid','true');
    }

    function clearFieldError(field){
        if(!field) return;
        const grp = field.closest('.form-group');
        if(!grp) return;
        const err = grp.querySelector('.input-error');
        if(err){ err.innerText=''; err.style.display='none'; }
        field.removeAttribute('aria-invalid');
    }

    window.UI = {
        showToast,
        setLoading,
        showFieldError,
        clearFieldError
    };

    // small spinner animation
    const style = document.createElement('style');
    style.innerHTML = '@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}';
    document.head.appendChild(style);

})();
