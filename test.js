let authStatus=true
const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "Notes",
      slug: "/notes",
      active: authStatus,
    },
    {
      name: "Create Note",
      slug: "/create-note",
      active: authStatus,
    },
  ];

  console.log(navItems)
const sqq = navItems.map((items)=>((
    console.log(`${items.name}`)
    
)))

console.log(sqq);

const someVar = navItems.map(item => ({
  ...item,
  active: item.active ? item.active : authStatus
}));
console.log(someVar);

