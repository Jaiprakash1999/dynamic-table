import React from "react";
import styles from "./styles.module.css";

// Example: 20 supplier rows shaped for DynamicList

const ListComponent = ({ suppliersData = [], columns = [] }) => {
  return (
        <table>
          <thead className={styles.tableHeader}>
            {columns.length > 0 &&
              columns.map((column) => (
                <th key={column.key} style={{ width: column.width }}>
                  {column.label}
                </th>
              ))}
          </thead>
          <tbody>
            {suppliersData.map((supplier) => (
              <tr key={supplier.id}>
                {columns.map((column) => (
                  <td key={column.key} style={{ width: column.width }}>
                    {supplier[column.key] || "-"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
  );
};

export default ListComponent;