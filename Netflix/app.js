const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');


function selectItem(e){
    removeBorder();
    removeShow();
    this.classList.add('tabborder');
    const tabContentItems = document.querySelector(`#${this.id}-content`);
    tabContentItems.classList.add('show');
}


function removeBorder(e){
tabItems.forEach(item=>item.classList.remove('tabborder'));
}
function removeShow(e){
    tabContentItems.forEach(item=>item.classList.remove('show'));
    }




tabItems.forEach(item=> item.addEventListener('click',selectItem));
