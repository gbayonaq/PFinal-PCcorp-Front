import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_PRODUCT_BY_ID } from "../../utils/graphql/querys/products/getProductById";
import Style from "./detailComponent.module.css";

const ProductDetail = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PRODUCT_BY_ID, {
    variables: { id },
  });

  if (loading) return <h1 className={Style.loading}>Cargando...</h1>;
  if (error)
    return (
      <error className={Style.error}>
        <h1>Error al cargar el producto.</h1>
      </error>
    );

  const { getProductById } = data;

  return (
    <div className={Style.details}>
      <img className={Style.img} src={getProductById.image} alt="imagen" />
      <p>Nombre: {getProductById.name}</p>
      <p>Precio: {getProductById.price}</p>
      <p>Modelo: {getProductById.model}</p>
    </div>
  );
};

export default ProductDetail;
