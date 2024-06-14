import { useState } from "react";
type InitData = {
  id: number;
  title: string;
};

type IniDatas = InitData[];

const Basic = () => {
  const posts = [
    { id: 1, title: "react" },
    { id: 2, title: "redux" },
  ];

  const [search, setSearch] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const filtered = posts.filter((post) => {
    return post.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="app">
      <h1>Handle Basic</h1>
      <LabelwithInput onSearch={handleSearch} />
      <List list={filtered} />
    </div>
  );
};

type SearchProps = {
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const LabelwithInput: React.FC<SearchProps> = ({ onSearch }) => {
  return (
    <>
      <label htmlFor="search">Search: </label>
      <input type="text" id="search" onChange={onSearch} />
    </>
  );
};

type ListProps = { list: IniDatas };

const List: React.FC<ListProps> = ({ list }) => {
  return (
    <>
      <ul>
        {list.map((item) => {
          return <Item key={item.id} item={item} />;
        })}
      </ul>
    </>
  );
};

type ItemProps = { item: InitData };

const Item: React.FC<ItemProps> = ({ item }) => {
  return (
    <>
      <h3>
        <a href="#">{item.title}</a>
      </h3>
    </>
  );
};

export default Basic