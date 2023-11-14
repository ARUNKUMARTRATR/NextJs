export const getContentfulData = (data) => {
  const returnData = [];
  if (data) {
    data.forEach((item) => {
      returnData.push({
        name: item.fields?.productName,
        price: item.fields.price,
        rank: item.fields.rank,
        released: item.fields.released,
        image: item.fields?.image ? item.fields?.image[0]?.fields?.file : {},
        p_Id: item.fields.p_Id,
        entryId: item.sys.id,
      });
    });
  }
  return returnData;
};

export const getContentfulUserData = (data) => {
  const returnData = [];
  if (data) {
    data.forEach((item) => {
      returnData.push({
        name: item.fields?.name,
        age: item.fields.age,

        entryId: item.sys.id,
      });
    });
  }
  return returnData;
};
