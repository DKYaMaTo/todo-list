import { useState } from "react";
import "./App.css";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function addltem() {
    if (!newItem) {
      alert("Enter an item");
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };

    setItems((oldList) => [...oldList, item]);
    setNewItem("");
  }

  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url("https://scontent.fbkk5-7.fna.fbcdn.net/v/t39.30808-6/364138220_1605043929989119_4845381843679244160_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHXeeIEZwGCLbGS8Hy0K5DSpaJHHGVPKS-lokccZU8pL8jA8K3HIb-uftYxMN2gegf4oqk80vJbvf1xjUIzceDF&_nc_ohc=8Uea6BVMkWkAX9-nFeN&_nc_ht=scontent.fbkk5-7.fna&oh=00_AfC84dE2JgrK-g_KvJYRUXTI4zvf6Ek_fa_AQBMhYuWC_w&oe=64E5934F")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Header */}
      <h1>Todo list by DK</h1>
      {/* Input */}
      <input
        type="text"
        placeholder="Add an item..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />

      <button onClick={() => addltem()}>Add</button>

      {/* List of item */}
      <div style={{display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  }}>
        <ul>
          {items.map((item) => {
            return (
              <li key={item.id}>
                {item.value}{" "}
                <button onClick={() => deleteItem(item.id)}>DELETE</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
