import React, { useState } from "react";
import InputMask from "react-input-mask";
import { Button, Container, Divider, Form, Icon } from "semantic-ui-react";
import MenuSistema from "../menuSistema/MenuSistema";
import axios from "axios";
import { Link } from "react-router-dom";

export default function FormProduto() {
  const [titulo, setTitulo] = useState("");
  const [codigo, setCodigo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [valorUnitario, setValorUnitario] = useState("");
  const [tempoEntregaMinimo, setTempoEntregaMinimo] = useState("");
  const [tempoEntregaMaximo, setTempoEntregaMaximo] = useState("");

  function salvar() {
    let produtoRequest = {
      titulo: titulo,
      codigo: codigo,
      descricao: descricao,
      valorUnitario: valorUnitario,
      tempoEntregaMinimo: tempoEntregaMinimo,
      tempoEntregaMaximo: tempoEntregaMaximo,
    };

    axios
      .post("http://localhost:8080/api/produto", produtoRequest)
      .then((response) => {
        console.log("Produto cadastrado com sucesso.");
      })
      .catch((error) => {
        console.log("Erro ao incluir o produto.");
      });
  }
  return (
    <div>
      <MenuSistema />
      <div style={{ marginTop: "3%" }}>
        <Container textAlign="justified">
          <h2>
            {" "}
            <span style={{ color: "darkgray" }}>
              {" "}
              Produto &nbsp;
              <Icon name="angle double right" size="small" />{" "}
            </span>{" "}
            Cadastro{" "}
          </h2>

          <Divider />

          <div style={{ marginTop: "4%" }}>
            <Form>
              <Form.Group widths="equal">
                <Form.Input
                  required
                  fluid
                  label="Título"
                  maxLength="100"
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                />

                <Form.Input required fluid label="Código do Produto">
                  <InputMask
                    required
                    value={codigo}
                    onChange={(e) => setCodigo(e.target.value)}
                  />
                </Form.Input>
              </Form.Group>

              <Form.TextArea
                label="Descrição"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
              ></Form.TextArea>

              <Form.Group>
                <Form.Input
                  fluid
                  label="Valor Unitário"
                  width={6}
                  value={valorUnitario}
                  onChange={(e) => setValorUnitario(e.target.value)}
                >
                  <InputMask />
                </Form.Input>

                <Form.Input
                  fluid
                  label="Tempo de Entrega Mínimo em Minutos"
                  width={6}
                  value={tempoEntregaMinimo}
                  onChange={(e) => setTempoEntregaMinimo(e.target.value)}
                ></Form.Input>
                <Form.Input
                  fluid
                  label="Tempo de Entrega Máximo em Minutos"
                  width={6}
                  value={tempoEntregaMaximo}
                  onChange={(e) => setTempoEntregaMaximo(e.target.value)}
                ></Form.Input>
              </Form.Group>
            </Form>

            <div style={{ marginTop: "4%" }}>
              <Button
                type="button"
                inverted
                circular
                icon
                labelPosition="left"
                color="orange"
                as={Link}
                to="/list-produto"
              >
                <Icon name="reply" />
                Voltar
              </Button>

              <Button
                inverted
                circular
                icon
                labelPosition="left"
                color="blue"
                floated="right"
                onClick={() => salvar()}
              >
                <Icon name="save" />
                Salvar
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
