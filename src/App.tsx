import React from "react";
import {
  Button,
  Header,
  Input,
  MultiSelect,
  Section,
  Col,
  Row,
  Select,
  Table,
} from "react-ui-softscript";
import "./App.css";
import "react-ui-softscript/dist/index.css";

function App() {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" },
    { value: "option5", label: "Option 5" },
  ];
  const [multiSelectedValues, multiSetSelectedValues] = React.useState([]);
  const [selectedValues, setSelectedValues] = React.useState<any>([]);

  const [values, setValues] = React.useState({
    valueButton: "",
    valueInput: "",
    headers: ["Column 1", "Column 2", "Column 3"],
    rows: [
      ["Cell 1", "Cell 2", "Cell 3"],
      ["Cell 4", "Cell 5", "Cell 6"],
      ["Cell 7", "Cell 8", "Cell 9"],
    ],
  });

  const handleChangeMultiSelected = (values: any) => {
    multiSetSelectedValues(values);
  };

  const handleChangeSelected = (values: any) => {
    setSelectedValues(values);
  };

  return (
    <>
      <Header
        user={{ name: "Seu nome aqui" }}
        ariaLabel="header"
        key="header-key-unique"
      />
      <Section
        ariaLabel="Seção teste lib"
        title="Teste lib"
        key="teste-lib"
        children={
          <>
            <Row className="alignFilters">
              <Col
                className="alignItems"
                ariaLabel="Col teste aria button"
                children={
                  <Button
                    variant="primary"
                    label="react-ui-softscript"
                    ariaLabel="teste button"
                    onClick={() =>
                      setValues((oldValues) => ({
                        ...oldValues,
                        valueButton: "testado",
                      }))
                    }
                    title="teste button"
                  />
                }
              />
            </Row>
            <Col
              className="alignItems"
              ariaLabel="Col teste aria multiselect"
              children={
                <MultiSelect
                  placeholder="Teste multiselect"
                  options={options}
                  values={multiSelectedValues}
                  onChange={handleChangeMultiSelected}
                  ariaLabel="Teste multiselect"
                  ariaDescribedby="test-description-multiselect"
                  label="Teste Multiselect"
                  id="test-multiselect"
                />
              }
            />

            <Col
              className="alignItems"
              ariaLabel="Row teste aria input"
              children={
                <Input
                  id="aria-input-test"
                  value={values.valueInput}
                  label="Input teste"
                  ariaLabel="Input teste"
                  ariaDescribedby="input-teste"
                  placeholder="Teste input"
                  type="text"
                  onChange={(e) =>
                    setValues((oldValues) => ({
                      ...oldValues,
                      valueInput: e.target.value,
                    }))
                  }
                />
              }
            />

            <Col
              className="alignItems"
              children={
                <Select
                  label="Select teste"
                  isClearable
                  value={selectedValues}
                  placeholder="Teste select"
                  options={options}
                  onChange={handleChangeSelected}
                  ariaLabel="Teste select"
                />
              }
            />
            <Col
              className="alignTable"
              children={
                <Table
                  headers={values.headers}
                  rows={values.rows}
                  theme="light"
                  expandableColumns={values.headers}
                  expandedContent={(row) => (
                    <div>
                      <h2>Detalhes da linha</h2>
                      <p>{row[0]}</p>
                      <p>{row[1]}</p>
                    </div>
                  )}
                />
              }
            />
          </>
        }
      ></Section>
    </>
  );
}

export default App;
