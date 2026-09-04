var sliders = [];
var slider_states = [];

function basic_slider(element_id){
    var slider_x = document.getElementById(element_id);
    var state_slider_x = document.getElementById("state_" + element_id);

    sliders.push(slider_x);
    slider_states.push(state_slider_x);

    slider_x.addEventListener("input", function(){
        state_slider_x.innerHTML = slider_x.value;
    });
}

basic_slider("slider_1");
basic_slider("slider_2");
basic_slider("slider_3");
