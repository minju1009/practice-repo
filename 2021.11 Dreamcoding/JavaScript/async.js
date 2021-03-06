//async & await2
// clear style of using promise !

// 1. async
async function fetchUser(){
    return 'minju';
}

const user = fetchUser();
console.log(user);

// 2. await π
function delay(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function getApple() {
    await delay(3000);
    return 'π';
}

async function getBanana() {
    await delay(3000);
    return 'π';
}

// μ¬κ³Όμ λ°λλ λͺ¨λλ₯Ό λ°μ€λ ν¨μ!
function pickFruits(){
    return getApple()
    .then(apple => {
        return getBanana()
        .then(banana => `${apple} + ${banana}`)
    });
}

pickFruits().then(console.log);
// μλ μ΄κ²μ μ½λ°±μ§μ₯μ΄λ€!!!
// λ€μκ³Ό κ°μ΄ κ³ μΉ  μ μλ€.

async function newPickFruits(){
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
}

newPickFruits().then(console.log);

// μμ κ°μ΄ νλ©΄, 3μ΄ 3μ΄μ© κ±Έλ¦°λ€. λμμ μ€ννκ² νλ €λ©΄?

async function Fruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`
}
// μλ.. μ΄λ κ² λ³΅μ‘νκ² μμ±ν΄μΌ ν΄?????

//3. useful Promise APIs
function pickAllFruits(){
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join('+'));
}
pickAllFruits().then(console.log);

//4. μ²« λ²μ§Έ, λΉ λ₯Έκ²λ§!!κ°μ Έμ€λ €λ©΄!
function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);