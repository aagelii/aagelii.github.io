let header = document.querySelector('#intro');
let anim = [
    { t: " ", ms: 200 },
    { t: "_", ms: 200 },
    { t: " ", ms: 200 },
    { t: "_", ms: 200 },
    { t: "A_", ms: 100 },
    { t: "AX_", ms: 100 },
    { t: "AXE_", ms: 100 },
    { t: "AXEL_", ms: 100 },
    { t: "AXEL _", ms: 100 },
    { t: "AXEL A_", ms: 100 },
    { t: "AXEL AG_", ms: 100 },
    { t: "AXEL AGE_", ms: 100 },
    { t: "AXEL AGEL_", ms: 100 },
    { t: "AXEL AGELI_", ms: 100 },
    { t: "AXEL AGELII_", ms: 100 },
    { t: "AXEL AGELII ", ms: 200 },
    { t: "AXEL AGELII_", ms: 200 },
    { t: "AXEL AGELII ", ms: 200 },
    { t: "AXEL AGELII_", ms: 200 },
    { t: "AXEL AGELII", ms: 200 },
    { t: "AXEL AGELII", ms: 200 }
];
let stepDenominator = 1;
if (window.localStorage.stepDenominator)
    stepDenominator = window.localStorage.stepDenominator;
let i = 0;
let update = () => {
    let step = anim[i];
    header.innerText = step.t;
    i++;

    if (i < anim.length)
        setTimeout(update, step.ms / stepDenominator);
    else {
        header.classList.add('top');
        setTimeout(() => {
            document.getElementById('main').style.opacity = 1;
            initGlobe();
        }, 500);
        window.localStorage.stepDenominator = 2;
    }
}
update();