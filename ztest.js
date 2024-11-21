const authStatus = true;
const sideNavItems = [
    { name: 'Home', active: authStatus },
    { name: 'Login', active: !authStatus },
    { name: 'Signup', active: !authStatus },
    { name: 'Contact', active: authStatus },
    { name: 'Projects', active: authStatus },
    { name: 'Fiverr Profile', active: authStatus },
    { name: 'Feedback', active: authStatus },
    { name: 'View Source', active: authStatus },
    { name: 'Instagram', active: authStatus },
    { name: 'LinkedIn', active: authStatus },
    { name: 'Sticker Store', active: authStatus },
    { name: 'Support', active: authStatus },
];



const selectedArrayIndices = [0, 1, 2, 3, 4, 11];
const selectedArrayItemstoRender = [];
console.log(sideNavItems.length);
for (let index = 0; index < selectedArrayIndices.length; index++) {
    try {
        console.log(`LoopIdx: ${index} :: selectedArrayIndices ${selectedArrayIndices[index]}`);
        selectedArrayItemstoRender[index] = sideNavItems[selectedArrayIndices[index]];
    } catch (error) {
        console.log('error encountered', error);
    }
}

console.log('selectedArrayItemstoRender', selectedArrayItemstoRender);

selectedArrayItemstoRender.map((items) => 
    console.log('selected objects: ', items.name));

