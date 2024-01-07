import React from "react";
import Card from "../../components/card/card";
import { NavBar, Footer } from '../../components/Index'
import { useQuery } from "@apollo/client";
import { GET_ALL_FAVS } from "../../utils/graphql/querys/products/favs/getAllFavs";

const Wishlist = ({ userId }) => {
  const { loading, error, data } = useQuery(GET_ALL_FAVS, {
    variables: { userId: "tuUserId" },
  });
  
  if (loading) {
    return (
      <div>
        <NavBar/>
        <h1>Wishlist</h1>
        <p>Cargando favoritos....</p>
        <Footer/>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <NavBar/>
        <h1>Wishlist</h1>
        <p>Error al cargar favoritos: {error.message}</p>
        <Footer/>
      </div>
    );
  }

  const favs = data.getAllFavs;

  return (
    <div>
      <NavBar/>
      <h1>Wishlist</h1>
      {favs.map((product) => (
        <Card
          key={product.id}
          props={product}
          isFav={true}
        />
      ))}
      <Footer/>
    </div>
  );
};

export default Wishlist;
