import React, { useEffect, useState } from "react";
import { FieldAppSDK } from "@contentful/app-sdk";
import { /* useCMA, */ useSDK } from "@contentful/react-apps-toolkit";

const Field = () => {
  const sdk = useSDK<FieldAppSDK>();
  useEffect(() => {
    sdk.window.startAutoResizer();
  }, [sdk.window]);
  const [newData, setNewData] = useState({ name: "", age: "" });
  /*
     To use the cma, inject it as follows.
     If it is not needed, you can remove the next line.
  */
  // const cma = useCMA();
  // If you only want to extend Contentful's default editing experience
  // reuse Contentful's editor components
  // -> https://www.contentful.com/developers/docs/extensibility/field-editors/

  const updateValueToContentful = () => {
    const existing: any = sdk.field.getValue();
    existing?.userList?.push(newData);
    sdk.field.setValue(existing);
    setNewData({ name: "", age: "" });
  };
  const deleteEntry = (entry) => {
    const existing: any = sdk.field.getValue();
    existing.userList = existing?.userList.filter(
      (item: any) => entry.name !== item.name && entry.age !== item.age
    );
    sdk.field.setValue(existing);
    setNewData({ name: "", age: "" });
  };
  const userList: any = sdk.field.getValue().userList;
  return (
    <>
      <div className="list_sec">
        <ul>
          {userList?.map((item, index) => (
            <li
              style={{
                margin: 10,
              }}
              key={index}
            >
              Name: {item.name} | Age: {item.age}{" "}
              <button
              onClick={()=>deleteEntry(item)}
                style={{
                  cursor: "pointer",
                  backgroundColor: "blue",
                  color: "white",
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="app_container">
        <div className="details">
          <label htmlFor="label">{sdk.parameters.instance.title}</label>
          <input
            onChange={(e) => setNewData({ ...newData, name: e.target.value })}
            placeholder={sdk.parameters.instance.title}
            type="text"
            name="1"
            value={newData.name}
          />
        </div>
        <div className="details">
          <label htmlFor="label">{sdk.parameters.instance.age}</label>
          <input
            onChange={(e) => setNewData({ ...newData, age: e.target.value })}
            placeholder={sdk.parameters.instance.age}
            type="text"
            name="2"
            value={newData.age}
          />
        </div>
        <div className="details">
          <button onClick={() => updateValueToContentful()}>Save</button>
        </div>
      </div>
    </>
  );
};

export default Field;
