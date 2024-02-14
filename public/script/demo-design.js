// Demo-Header-Part
// Header Left Part Demo
function headerLeftPartDemoBg(){
    const  allSkeleton = document.querySelectorAll('.demo-header-left-bg')
    allSkeleton.forEach(item=>{
    item.classList.add('demo-header-left-bg-off')
    });
}
// Header right Part Demo
function headerRightPartDemoBg(){
    const  allSkeleton = document.querySelectorAll('.demo-header-right-bg')
    allSkeleton.forEach(item=>{
    item.classList.add('demo-header-right-bg-off')
    });
}
setTimeout(() => {
    headerLeftPartDemoBg();
    headerRightPartDemoBg();
}, 10); 