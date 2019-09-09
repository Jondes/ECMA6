/* function scaryClown() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('🤡');
        }, 2000);
    });
}

async function msg() {
    const msg = await scaryClown();
    console.log('Message:', msg);
}

msg(); */

/* function who() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('🤡');
        }, 200);
    });
}
function what() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('lurks');
        }, 300);
    });
}
function where() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('in the shadows');
        }, 500);
    });
}
async function msg() {
    const a = await who();
    const b = await what();
    const c = await where();

     console.log(`${a} ${b} ${c}`);

} */



/* const userfunc = async () => {

    try {
        const id = await getuserIds;
        console.log(id);
        const getusername = await getUsername(id[3]);
        console.log(getusername.username);
        const getuserage = await getUserage(id[3]);
        console.log(getuserage.user_age);
    } catch (error) {
        console.log(error);
    }
};

userfunc(); */
