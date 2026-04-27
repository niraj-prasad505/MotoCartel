import { Link, useLocation } from "react-router-dom";

const routeNames = {
  shop: "Shop",
  product: "Product",
  categories: "Categories",
};

const Breadcrumb = ({ productName }) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  return (
    <div className="text-sm text-gray-400 flex gap-2">
      <Link to="/">Home</Link>

      {pathnames.map((name, index) => {
        const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
        const isLast = index === pathnames.length - 1;

        const displayName =
          isLast && productName
            ? productName
            : routeNames[name] || name;

        return (
          <span key={routeTo} className="flex gap-2">
            {" > "}
            {isLast ? (
              <span className="text-white">{displayName}</span>
            ) : (
              <Link to={routeTo}>{displayName}</Link>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumb;