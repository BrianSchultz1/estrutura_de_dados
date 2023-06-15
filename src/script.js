class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const newNode = new Node(value);
  
      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    insertNode(node, newNode) {
      if (newNode.value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
  
    traverseInOrder() {
      return this.inOrder(this.root);
    }
  
    inOrder(node) {
      if (node !== null) {
        let output = "";
  
        output += this.inOrder(node.left);
        output += `${node.value} `;
        output += this.inOrder(node.right);
  
        return output;
      }
  
      return "";
    }
  }
  
  document.getElementById("simulate-button").addEventListener("click", simulateDataStructure);
  
  function simulateDataStructure() {
    const structureSelect = document.getElementById("structure-select");
    const selectedStructure = structureSelect.value;
    const inputData = document.getElementById("data").value;
  
    let data = inputData.split(",").map((item) => item.trim());
  
    let result;
    switch (selectedStructure) {
      case "fila":
        result = simulateFila(data);
        break;
      case "pilha":
        result = simulatePilha(data);
        break;
      case "lista":
        result = simulateLista(data);
        break;
      case "arvore":
        result = simulateArvore(data);
        break;
      default:
        result = "Estrutura de dados inválida.";
    }
  
    const outputDiv = document.getElementById("output");
    outputDiv.textContent = result;
  }
  
  function simulateFila(data) {
    let fila = [];
    let output = "Simulação da Fila:\n";
  
    for (let i = 0; i < data.length; i++) {
      fila.push(data[i]);
      output += `Inserido: ${data[i]}\n`;
    }
  
    while (fila.length > 0) {
      const removedItem = fila.shift();
      output += `Removido: ${removedItem}\n`;
    }
  
    return output;
  }
  
  function simulatePilha(data) {
    let pilha = [];
    let output = "Simulação da Pilha:\n";
  
    for (let i = 0; i < data.length; i++) {
      pilha.push(data[i]);
      output += `Inserido: ${data[i]}\n`;
    }
  
    while (pilha.length > 0) {
      const removedItem = pilha.pop();
      output += `Removido: ${removedItem}\n`;
    }
  
    return output;
  }
  
  function simulateLista(data) {
    let lista = [];
    let output = "Simulação da Lista:\n";
  
    for (let i = 0; i < data.length; i++) {
      lista.push(data[i]);
      output += `Inserido: ${data[i]}\n`;
    }
  
    for (let i = 0; i < lista.length; i++) {
      const removedItem = lista.splice(i, 1);
      output += `Removido: ${removedItem}\n`;
      i--; // Decrementa o índice para compensar a remoção do elemento
    }
  
    return output;
  }
  
  function simulateArvore(data) {
    let tree = new BinaryTree();
    let output = "Simulação da Árvore:\n";
  
    for (let i = 0; i < data.length; i++) {
      tree.insert(data[i]);
      output += `Inserido: ${data[i]}\n`;
    }
  
    output += `Em ordem: ${tree.traverseInOrder()}\n`;
  
    return output;
  }
  