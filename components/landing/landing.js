import Link from "next/link";
import { getContentfulData } from "../services/contentfulDataModifier";
import CardComp from "./card/card";
function Landing(props) {
  let { listItems } = props;
  listItems = getContentfulData(listItems);
  return (
    <>
      <div className="main_container">
        <ul className="list_sec">
          {listItems?.map((item) => (
            <li key={item.p_Id}>
              <Link href={`/details/${item.p_Id}`}>
                <CardComp
                  url={item.image.url}
                  alt={item.image.name}
                  title={item.name}
                  desc={item.released}
                ></CardComp>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default Landing;
