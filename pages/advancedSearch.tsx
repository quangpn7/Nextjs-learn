import React, { useCallback, useState } from "react";

type Props = {};
type advancedSearch = {
  username: string;
  type: number | string;
  address: string;
};

const AdvancedSearch = (props: Props) => {
  const [advancedSearch, setAdvancedSearch] = useState<advancedSearch>({
    username: "",
    type: 0,
    address: "",
  });

  const onChangeSearch = useCallback(
    (value: string, name: string): void => {
      setAdvancedSearch({
        ...advancedSearch,
        [name]: value,
      });
    },
    [advancedSearch]
  );
  const { username, type, address } = advancedSearch;
  return (
    <>
      <div className="form__field d-flex flex-column container w-50">
        <label>User:</label>
        <input
          type="text"
          name="username"
          onChange={({ target }) => {
            onChangeSearch(target.value, target.name);
          }}
        />
        <label>Type:</label>
        <select
          name="type"
          id="typeId"
          onChange={({ target }) => {
            onChangeSearch(target.value, target.name);
          }}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
        <label>Address</label>
        <input
          type="text"
          name="address"
          onChange={({ target }) => {
            onChangeSearch(target.value, target.name);
          }}
        />
      </div>
      <hr />
      <div className="container">
        <div className="table-responsive">
          <table className="table table-primary w-50 mx-auto">
            <thead>
              <tr>
                <th scope="col">Username</th>
                <th scope="col">Type</th>
                <th scope="col">Address</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">{username}</td>
                <td>{type}</td>
                <td>{address}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdvancedSearch;
