!async function () {

    async function doNothing(duration) {
        await new Promise(resolve => {
            setTimeout(() => { resolve(); }, duration);
        });
    }

    async function writeCode(code, duration, step = 1, selector = '#text') {
        let container = document.querySelector(selector);
        for (let i = 1; i <= code.length; i += step) {
            await new Promise(resolve => {
                setTimeout(function run() {
                    container.innerHTML = code.substring(0, i);
                    container.scrollTop = container.scrollHeight;
                    resolve();
                }, duration);
            });
        }
    }
    let code = `
<style>
.face-container {
width: 68px;
height: 100px;
background: #ba4f8f;
position: absolute;
margin: 0 auto;
left: 0;
right: 0;
top: 41px;
border-radius: 120px 120px 120px 120px;
}
.face-container .eye-left, .face-container .eye-right {
width: 10px;
height: 10px;
background: #842963;
position: absolute;
border-radius: 30%;
top: 33px;
}
.face-container .eye-left .pupil, .face-container .eye-right .pupil {
width: 5px;
height: 5px;
background: #fff;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
border-radius: 50% 50% 0 0;
margin: auto;
}
.face-container .eye-left {
left: 20px;
}
.face-container .eye-right {
right: 20px;
}
.face-container .eyebrow-left, .face-container .eyebrow-right {
width: 20px;
height: 4px;
background: #842963;
position: absolute;
top: 30px;
}
.face-container .eyebrow-left {
left: 11px;
transform: rotate(20deg);
}
.face-container .eyebrow-right {
right: 11px;
transform: rotate(-20deg);
}
.face-container .mouth {
width: 40px;
height: 18px;
background: #371630;
position: absolute;
top: 60px;
left: 14px;
border-radius: 2px 2px 12px 12px;
overflow: hidden;
z-index: 40;
}
.face-container .mouth .teeth-upper, .face-container .mouth .teeth-lower {
position: absolute;
background: #fff;
left: 0;
width: 100%;
height: 4px;
}
.face-container .mouth .teeth-upper {
top: 0;
}
.face-container .mouth .teeth-lower {
bottom: 0;
}
.face-container .mouth .tongue {
width: 20px;
height: 6px;
background: #ba4f8f;
position: absolute;
bottom: 0;
left: 0;
right: 0;
margin: auto;
}
.face-container .ear-left, .face-container .ear-right {
width: 10px;
height: 20px;
background: #ba4f8f;
position: absolute;
border-radius: 20px;
top: 50px;
}
.face-container .ear-left {
left: -5px;
}
.face-container .ear-right {
right: -5px;
}
.face-container .chin {
width: 90px;
height: 64px;
background: #ba4f8f;
position: absolute;
top: 50px;
left: -10px;
border-radius: 30px 30px 40px 40px;
z-index: 20;
overflow: hidden;
border-bottom: 6px solid #842963;
}
.face-container .chin .line {
position: absolute;
bottom: 0;
width: 4px;
height: 30px;
background: #842963;
}
.face-container .chin .line-01 {
left: 26px;
height: 26px;
}
.face-container .chin .line-02 {
left: 37px;
}
.face-container .chin .line-03 {
right: 26px;
height: 26px;
}
.face-container .chin .line-04 {
right: 37px;
}
.neck {
width: 105px;
height: 60px;
background: #ba4f8f;
position: absolute;
margin: 0 auto;
left: 0;
right: 0;
top: 110px;
border-radius: 20px;
z-index: 10;
}
.neck-top {
width: 125px;
height: 92px;
background: #efc400;
position: absolute;
margin: 0 auto;
left: 0;
right: 0;
top: 106px;
border-radius: 25px;
z-index: 9;
}
.vest-top {
width: 250px;
height: 162px;
background: #354255;
position: absolute;
margin: 0 auto;
left: 0;
right: 0;
top: 110px;
border-radius: 50px 50px 25px 25px;
z-index: 8;
}
.vest-torso {
width: 26px;
height: 87px;
background: #efc400;
position: absolute;
margin: 0 auto;
left: 0;
right: 0;
top: 198px;
z-index: 9;
}
.vest-waist {
width: 80px;
height: 16px;
background: #efc400;
position: absolute;
margin: 0 auto;
left: 0;
right: 0;
top: 269px;
z-index: 9;
}
.shoulder-sides {
width: 298px;
height: 90px;
background: #efc400;
position: absolute;
margin: 0 auto;
left: 0;
right: 0;
top: 129px;
z-index: 7;
border-radius: 30px;
}
.shoulder-left, .shoulder-right {
width: 100px;
height: 100px;
border-radius: 50%;
position: absolute;
background: #ba4f8f;
margin: 0 auto;
top: 130px;
z-index: 6;
}
.shoulder-left .arm, .shoulder-right .arm {
position: relative;
top: 90px;
width: 50px;
height: 95px;
background: #ba4f8f;
}
.shoulder-left {
left: -278px;
right: 0;
}
.shoulder-left .arm {
left: 20px;
border-radius: 0px 0px 80px 200px;
}
.shoulder-right {
right: -278px;
left: 0;
}
.shoulder-right .arm {
right: -28px;
border-radius: 0px 0px 200px 80px;
}
.forearm-left {
position: absolute;
top: 235px;
left: -162px;
right: 0;
margin: 0 auto;
z-index: 300;
background: #ba4f8f;
width: 110px;
height: 70px;
transform: rotate(-11deg);
border-radius: 0 30px 30px 0;
}
.forearm-left .knuckle, .forearm-left .thumb {
width: 25px;
height: 25px;
border-radius: 50%;
position: absolute;
background: #ba4f8f;
}
.forearm-left .thumb {
top: -10px;
left: 65px;
}
.forearm-left .knuckle-01 {
top: -2px;
left: 83px;
}
.forearm-left .knuckle-02 {
top: 14px;
left: 90px;
}
.forearm-left .knuckle-03 {
top: 31px;
left: 90px;
}
.forearm-left .knuckle-04 {
top: 45px;
left: 84px;
}
.hips {
position: absolute;
top: 284px;
left: 0;
right: 0;
margin: 0 auto;
width: 110px;
height: 45px;
z-index: 6;
background: #354255;
border-radius: 0px 0px 22px 22px;
}
.hips .leg-left, .hips .leg-right {
width: 40px;
height: 50px;
position: absolute;
top: 35px;
background: #354255;
}
.hips .leg-left {
left: 5px;
}
.hips .leg-right {
right: 5px;
}
.hips .boot-left, .hips .boot-right {
position: absolute;
top: 85px;
width: 45px;
height: 48px;
background: #efc400;
}
.hips .boot-left {
left: 3px;
transform: rotate(-3deg);
}
.hips .boot-right {
right: 3px;
transform: rotate(3deg);
}
.hips .boot-left-top, .hips .boot-right-top {
position: absolute;
top: 83px;
width: 54px;
height: 8px;
background: #8f4b00;
border-radius: 3px;
}
.hips .boot-left-top {
transform: rotate(-3deg);
left: -3px;
}
.hips .boot-right-top {
transform: rotate(3deg);
right: -3px;
}
.hips .foot-left, .hips .foot-right {
position: absolute;
top: 123px;
width: 20px;
height: 10px;
background: #efc400;
}
.hips .foot-left {
left: -10px;
border-radius: 20px 0 0 0;
}
.hips .foot-right {
right: -10px;
border-radius: 0 20px 0 0;
}
.gauntlet-container {
position: absolute;
top: 230px;
right: 0;
left: 160px;
margin: 0 auto;
background: #fda700;
height: 80px;
width: 95px;
transform: rotate(10deg);
border-radius: 20px 0 0 20px;
z-index: 300;
}
.gauntlet-container .thumb, .gauntlet-container .knuckle {
width: 30px;
height: 25px;
background: #fda700;
border-radius: 50%;
position: absolute;
}
.gauntlet-container .knuckle {
top: -2px;
left: -5px;
}
.gauntlet-container .thumb {
top: -12px;
left: 19px;
width: 24px;
height: 25px;
}
.gauntlet-container .wrist {
position: absolute;
top: 0;
left: 93px;
width: 7px;
height: 80px;
transform: rotate(1deg);
background: #fda700;
}
.gauntlet-container .wrist .inner {
width: 14px;
height: 80px;
background: #ffc800;
position: absolute;
top: 0;
left: -14px;
}
.gauntlet-container .stone-holder {
border-radius: 12px;
width: 18px;
height: 10px;
position: absolute;
transform: rotate(2deg);
background: #ffc800;
}
.gauntlet-container .stone-holder .stone {
width: 60%;
height: 60%;
border-radius: 30%;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
margin: auto;
}
.gauntlet-container .stone-01 {
top: 11px;
left: 6px;
}
.gauntlet-container .stone-01 .stone {
background: #bf00ae;
}
.gauntlet-container .stone-02 {
top: 29px;
left: 6px;
}
.gauntlet-container .stone-02 .stone {
background: #6b00f5;
}
.gauntlet-container .stone-03 {
top: 48px;
left: 6px;
}
.gauntlet-container .stone-03 .stone {
background: #f00;
}
.gauntlet-container .stone-04 {
top: 65px;
left: 6px;
}
.gauntlet-container .stone-04 .stone {
background: #ff2600;
}
.gauntlet-container .stone-05 {
top: 3px;
left: 24px;
width: 14px;
}
.gauntlet-container .stone-05 .stone {
background: #00c54f;
}
.gauntlet-container .stone-06 {
top: 31px;
left: 36px;
width: 33px;
height: 35px;
border-radius: 18px;
}
.gauntlet-container .stone-06 .stone {
border-radius: 50%;
background: #f0ff00;
}
</style>
`
    let text1 = `大家好，今天我们来画一只`
    let text2 = `<p style="font-size:2vw"><span id="zsj">紫薯精！</span></p>`
    let text3 = `啊不对，`
    let text4 = `<style>#zsj{text-decoration: line-through;}</style>`
    let text5 = `是灭霸！`
    await writeCode(text1, duration = 150, step = 1, selector = '#text1');
    await writeCode(text2, duration = 5, step = 1, selector = '#text2');
    await writeCode(text3, duration = 150, step = 1, selector = '#text3');
    await writeCode(text4, duration = 5, step = 1, selector = '#text4');
    await writeCode(text5, duration = 150, step = 1, selector = '#text5');
    await doNothing(666);
    await writeCode(code, duration = 1, step = 15, selector = '#code');
}()
