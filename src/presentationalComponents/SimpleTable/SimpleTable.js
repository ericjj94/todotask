// inspired from material table official website

import React, { Fragment, useState } from "react";
import { connect } from 'react-redux';
import MaterialTable, { MTableAction } from "material-table";
import IconButton from "@material-ui/core/IconButton";
import { deleteTodo } from '../../actions/createTodoListActions';

function CustomEditComponent(props) {
    const { todos, deleteTodo } = props;
  const tableRef = React.createRef();
  const addActionRef = React.useRef();

  const tableColumns = [
    { title: "Todo Name", field: "todoName" },
    { title: "Todo Description", field: "todoDescription" },
    { title: "Bucket", field: "todoBucket" },
    {
      title: "Actions",
      field: "internal_action",
      editable: false,
      render: (rowData) =>
        rowData && (
          <React.Fragment>
          <IconButton
            color="secondary"
            onClick={() => {console.log('data',rowData)}}
          >
            <div>Edit</div>
          </IconButton>
          <IconButton
            color="secondary"
            onClick={() => { 
                deleteTodo(rowData.tableData.id);
            }}
          >
            <div>Delete</div>
          </IconButton>
          
          </React.Fragment>
          
        )
    }
  ];

  const [tableData, setTableData] = useState(todos);

  return (
    <Fragment>
      <MaterialTable
        tableRef={tableRef}
        columns={tableColumns}
        data={tableData}
        title="TODO list"
        options={{
          search: false
        }}
        // components={{
        //   Action: (props) => {
        //     //If isn't the add action
        //     if (
        //       typeof props.action === typeof Function ||
        //       props.action.tooltip !== "Add"
        //     ) {
        //       return <MTableAction {...props} />;
        //     } else {
        //       return <div ref={addActionRef} onClick={props.action.onClick} />;
        //     }
        //   }
        // }}
        // actions={[
        //   {
        //     icon: "Task Done",
        //     tooltip: "Task Done",
        //     onClick: (event, rowData) => alert("You saved " + rowData.name)
        //   }
        // ]}
        // editable={{
        //   onRowAdd: (newData) =>
        //     Promise.resolve(setTableData([...tableData, newData]))
        // }}
      />
    </Fragment>
  );
}
const mapStateToProps = (state) => ({
  todo: state.todoListReducer.todos
}) 
export default connect(null,{
    deleteTodo
})(CustomEditComponent)
