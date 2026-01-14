import { useContext, useState, useMemo, useCallback } from "react";
import { GlobalContext } from "../context/GlobalContext";
import DeviceRow from "../components/DeviceRow";

// debounce della ricerca per titolo con un delay di attesa
function debounce(callback, delay) {
  let timer;
  return (value) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(value)
    }, delay)
  }
}

export default function DeviceList() {
  const { devices } = useContext(GlobalContext);

  const [searchTitle, setSearchTitle] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [sortField, setSortField] = useState("");
  const [sortOrder, setSortOrder] = useState(1);

  const debounceSearch = useCallback(debounce(setSearchTitle, 500),[])

  const categories = useMemo(() => ["", ...new Set(devices.map(d => d.category))], [devices]);

  // ordinamento in ordine alfabetico e per categorie
  const filteredDevices = useMemo(() => {
    let result = devices.filter(device => {
      const matchesTitle = device.title.toLowerCase().includes(searchTitle.toLowerCase());
      const matchesCategory = categoryFilter === "" || device.category === categoryFilter;
      return matchesTitle && matchesCategory;
    });

    if (sortField) {
      result = result.slice().sort((a, b) => {
        const aValue = a[sortField]?.toLowerCase() || "";
        const bValue = b[sortField]?.toLowerCase() || "";
        if (aValue < bValue) return -1 * sortOrder;
        if (aValue > bValue) return 1 * sortOrder;
        return 0;
      });
    }

    return result;
  }, [devices, searchTitle, categoryFilter, sortField, sortOrder]);

  return (
    <div className="list-devices">
      <div className="filters">
        <input
          type="text"
          placeholder="Cerca per title..."
          onChange={e => debounceSearch(e.target.value)}
        />
        <select
          value={categoryFilter}
          onChange={e => setCategoryFilter(e.target.value)}
        >
          {categories.map(cat => (
            <option key={cat.id} value={cat}>
              {cat === "" ? "Tutte le categorie" : cat}
            </option>
          ))}
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>
              
            </th>
            <th
              onClick={() => {
                if (sortField === "title") setSortOrder(sortOrder * -1);
                else {
                  setSortField("title");
                  setSortOrder(1);
                }
              }}
              
            >
              Title {sortField === "title" ? (sortOrder === 1 ? "▲" : "▼") : ""}
            </th>
            <th
              onClick={() => {
                if (sortField === "category") setSortOrder(sortOrder * -1);
                else {
                  setSortField("category");
                  setSortOrder(1);
                }
              }}
              
            >
              Category {sortField === "category" ? (sortOrder === 1 ? "▲" : "▼") : ""}
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredDevices.map((device) => (
            <DeviceRow key={device.id} device={device} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
