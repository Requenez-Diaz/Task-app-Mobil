interface UserData {
  name: string;
  img: { uri: string };
}

const usersData: UserData[] = [
  {
    name: "Alex",
    img: {
      uri: "https://guillemrecolons.com/wp-content/uploads/2020/01/Ventajas-y-desventajas-de-los-perfiles-privados-en-las-redes-sociales.webp",
    },
  },
  {
    name: "Aaron",
    img: { uri: "https://i.imgur.com/mxMUYqt.gif" },
  },
  {
    name: "Aaron",
    img: { uri: "https://i.imgur.com/mxMUYqt.gif" },
  },
  {
    name: "Aaron",
    img: { uri: "https://i.imgur.com/mxMUYqt.gif" },
  },

  // Agrega más usuarios aquí
];

export default usersData;
