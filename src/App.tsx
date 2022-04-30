// importa todos os componentes, poderia ser feito da seguinte forma:
// import { Container } from './App.styles';
// Dentro da constante App poderia ser chamado: <Container></Container>
// isso facilita quando se tem muitos componentes em uma tela.
import * as Componente from './App.styles';
import { useState } from 'react';
import { Item } from './types/item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';

const App = () => {

  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Comprar o pão na padaria', done: false },
    { id: 2, name: 'Comprar um bolo na padaria', done: true },
  ]);

  const handleAddTask = (taskName: string) => {
    let novaLista = [...list];
    
    novaLista.push({ 
      id: list.length + 1,
      name: taskName,
      done: false
    });

    setList(novaLista);
  }

  return (
    <Componente.Container>
      <Componente.Area>
        <Componente.Header>
          Lista de Tarefas
        </Componente.Header>

          {/* Adiciona nova tarefa */}
          <AddArea onEnter = { handleAddTask }/>
          
          
          {/* Lista de Itens */}
          {list.map((item, index)=>(
            <ListItem 
              key={index} item={item}
            />
              // <div>{ item.name }</div>
          ))}

      </Componente.Area>
    </Componente.Container>
  );
}

export default App;