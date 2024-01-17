// locomotive js - smooth scrolling 
const scroll = new LocomotiveScroll({
    el : document.querySelector('#main'),
    smooth : true 
});

// gsap to animate 
gsap.from(".nline", {
        stagger : .2, // .1 kah gap
        y : 10,
        duration : 1,
        ease : Power3 , 
        opacity : 0 

    }
)

Shery.textAnimate("#headings h1" /* Element to target.*/, {
    //Parameters are optional.
    style: 2 ,
    y : 10, 
    delay : 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });


gsap.from(
    ".anim2",{
        y : 50 , 
        stagger : .3, 
        opacity : 0,
        ease : Expo,
        duration : 1
    }
)

// shery js to animate image

Shery.imageEffect(
    "#imgntext img",{
        style : 4, 
        config : {"uColor":{"value":false},"uSpeed":{"value":0.55,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":3.21,"range":[0,5]},"uFrequency":{"value":4.66,"range":[0,10]},"geoVertex":{"range":[1,64],"value":26.49},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.75},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.55,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    }
)

Shery.imageEffect(
    ".imgeff img",{
        style : 5, 
        config : {"a":{"value":2,"range":[0,30]},"b":{"value":-0.89,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6666666666666666},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.43,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    }
)

gsap.from(
    "#imgntext img",{
    y : "70",
    opacity : 0,
    duration : 2,
    ease : Expo,
    }
)

Shery.imageEffect("#bioimg",{
    style : 5 , 
    config : {"a":{"value":2,"range":[0,30]},"b":{"value":-0.97,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.280753910711736},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.08,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":2.29,"range":[0,100]}},
    gooey : true 

})

document.querySelector("#ftext button").addEventListener("mouseover",()=>{
    gsap.to("#future video",{
        opacity : 1 ,
        duration : 1.5,
        ease : Power4 , 
    })
}) ; 

document.querySelector("#ftext button").addEventListener("mouseleave",()=>{
    gsap.to("#future video",{
        opacity : 0 ,
        duration : 1.5,
        ease : Power4
    })
}) ; 


