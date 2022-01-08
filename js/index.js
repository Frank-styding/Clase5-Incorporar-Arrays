let users = [];

class User {
  constructor(name, password) {
    this.name = name;
    this.password = password;
  }
}
function Menu() {
  let operation = parseInt(
    prompt(`
    Digite la operacion
    1.Registar nuevo usuario
    2.Ingrsar
    3.Salir
    `)
  );

  switch (operation) {
    case 1:
      register();
      AskForExit();
      break;
    case 2:
      login();
      AskForExit();
      break;
    case 3:
      return;
    default:
      alert("La operacion digitado no existe");
      return;
  }
}

function register() {
  let name = prompt(`Digite su nombre de usuario`);
  let noExits = users.filter((user) => user.name == name).length == 0;
  if (noExits) {
    let password = prompt("Digite su contraseña");
    users.push(new User(name, password));
    alert("El registro fue realalizado con exito");
  } else {
    alert(`El usuario ya existe`);
  }
}

function login() {
  let name = prompt(`Digite su nombre de usuario`);
  let password = prompt("Digite su contraseña");
  let exits =
    users.filter((user) => user.name == name && user.password == password)
      .length == 1;
  if (exits) {
    alert("Bienbenido" + name);
  } else {
    alert("El usuario no existe");
  }
}

function AskForExit() {
  let exit = confirm("Desea salir");
  if (exit) {
    return;
  } else {
    Menu();
  }
}

Menu();
