import { useState, useEffect } from "react";
import { getContentfulClient } from "../../services/contentfulHelper";
import { getContentfulData } from "../../services/contentfulDataModifier";
import { useContentfulLiveUpdates } from "@contentful/live-preview/react";
import { ContentfulLivePreview } from "@contentful/live-preview";


function Details({data,preview}) {
  const updatedEntries = useContentfulLiveUpdates(data);
  const details = getContentfulData(updatedEntries)[0];
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="main_container">
      <div className="details">
        <div className="left">
          {isClient ? (
            <img
              src={details?.image?.url}
              alt="itemImage"
              className="image_sec"
            />
          ) : null}
        </div>
        <div className="right">
          <div
            className="item_details"
            {...ContentfulLivePreview.getProps({
              entryId: details.entryId,
              fieldId: "productName",
            })}
          >
            <label>NAME:</label> <label> {details.name}</label>
          </div>
          <div
            className="item_details"
            {...ContentfulLivePreview.getProps({
              entryId: details.entryId,
              fieldId: "price",
            })}
          >
            <label>PRICE:</label> <label> {details.price}</label>
          </div>
          <div
            className="item_details"
            {...ContentfulLivePreview.getProps({
              entryId: details.entryId,
              fieldId: "rank",
            })}
          >
            <label>RANK:</label> <label> {details.rank}</label>
          </div>
          <div
            className="item_details"
            {...ContentfulLivePreview.getProps({
              entryId: details.entryId,
              fieldId: "released",
            })}
          >
            <label>RELEASED:</label>{" "}
            <label> {isClient ? details.released : null}</label>
          </div>
        </div>
      </div>
    </div>
  );
}
export async function getServerSideProps(context) {
  const { preview, query } = context;

  let details = await getContentfulClient(preview)
    .getEntries({
      content_type: "products",
      "fields.p_Id": query.id,
    })
    .then((entries) => {
      return entries.items;
    })
    .catch((er) => {
      console.log("ERROR", er);
      return false;
    });

  return {
    props: {
      data: details,
      preview: preview ? true : false,
    },
  };
}
export default Details;
