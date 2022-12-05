class CreateFormGenerator {
    constructor(element){
        this.container      = element;
        this.steps          = element.childElementCount;
        this.stepHeilighter = element.closest('.multistep_form').querySelectorAll('.form_top_steps>*');
        this.currentStep    = 0;

        /* activate next and prev button event */
        this.activevateNextPrevButton();
        
        /* activate step heilighter */
        this.activateStepHeilighter();
    }

    goToNext(){
        if(this.currentStep<(this.steps-1)){
            this.currentStep++;
            this.container.style.transform = `translateX(-${this.currentStep * 100}%)`;
        }
        /* activate step heilighter */
        this.activateStepHeilighter();
    }

    goToBack(){
        if(this.currentStep>0){
            this.currentStep--;
            this.container.style.transform = `translateX(-${this.currentStep * 100}%)`;
        }

        
        /* activate step heilighter */
        this.activateStepHeilighter();
    }


    activevateNextPrevButton()
    {
        let next_buttons = this.container.querySelectorAll('.form_footer button.next');
        let prev_buttons = this.container.querySelectorAll('.form_footer button.prev');

        /* work with next button start */
        if(next_buttons)
        {
            next_buttons.forEach(next_button=>{
                next_button.addEventListener('click', ()=>{
                    this.goToNext();
                });
            })
        }else{
            console.log("Your step change Button not exits!");
        }
        /* work with next button end */


        
        /* work with prev button start */
        if(prev_buttons)
        {
            prev_buttons.forEach(prev_button=>{
                prev_button.addEventListener('click', ()=>{
                    this.goToBack();
                });
            })
        }else{
            console.log("Your step change Button not exits!");
        }
        /* work with prev button end */
    }


    activateStepHeilighter(){
        this.stepHeilighter.forEach(elem => {
            elem.classList.remove('active');
        });

        this.stepHeilighter[this.currentStep].classList.add('active');
    }
}



/* generate form start */
    let my_form_step_containers = document.querySelectorAll(".multistep_form .step_container");
    if(my_form_step_containers)
    {
        my_form_step_containers.forEach(container=>{
            new CreateFormGenerator(container);
        });
    }

// main form 




var currentTab = 0; 
showTab(currentTab); 

function showTab(n) {
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  fixStepIndicator(n)
}

function nextPrev(n) {
  var x = document.getElementsByClassName("tab");
  if (n == 1 && !validateForm()) return false;
  x[currentTab].style.display = "none";
  currentTab = currentTab + n;
  showTab(currentTab);
}

function validateForm() {
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  for (i = 0; i < y.length; i++) {
    if (y[i].value == "") {
      y[i].className += " invalid";
      valid = false;
    }
  }
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; 
}

function fixStepIndicator(n) {
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  x[n].className += " active";
}
//  end


function startFrom(){
   setTimeout(function(){
                window.location.href = 'STEP.html';
             }, 5000);
}
// form 2




   
