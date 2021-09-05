// Procedure followed:
// 1. When we 'click', the event is listened and it adds 'open' class to that panel, which in turn triggers css
// and grows the flex size to 5 and the font size to 40 px.
// 2. When this transition ends and the flex-grow property has changed, we want to animate in the top and bottom 
// words of each panel which is clicked.
//  So we listen to transitioned event and add 'open-active' class to that panel, which in turn triggers css, 
// and transforms the first and last child of that panel
//  Now if we click the same panel again, then open will be removed from it and so

// we select all the 5 panels
const panels = document.querySelectorAll('.panel');
function toggleOpen()// this function toggles the class ie it adds and removes the class 'open' 
// from the element calling the toggleOpen()
{
    // console.log('Hello'); added just to debug
    this.classList.toggle('open');
}
function toggleActive(e)
{
    console.log(e.propertyName);
    // we will toggle only if flex-grow property has changed
    // if the flex grow has changed, then we want to toggle 'open-active' class so that the first and last elements come in 
    if(e.propertyName==='flex-grow')
    {
        this.classList.toggle('open-active');
    }

}
// go to each panel loop over them and listen the click event for each of them and find toggleDown() to run it do 
// that the class 'open' gets added to that panel
// notice that we write toggleOpen instead of toggleOpen() because we just want to give reference to the function.
// If we write ('click',toggleOpen()), then this will run the toggleOpen on page load, but we don't want this to happen
panels.forEach(panel=>panel.addEventListener('click',toggleOpen));
// as soon as the transition gets ended, we want to listen to the transitionEnd event and we want to toggle 'open active' class
// so that the first and last elements come from above and down respectively
panels.forEach(panel=>panel.addEventListener('transitionend',toggleActive));

