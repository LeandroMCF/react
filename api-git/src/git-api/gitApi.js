import { Component } from 'react';
import './style.css';

class GitApi extends Component{
    constructor(props){
        super(props);
        this.state = {
            repositories : [],
            pesquisa : '',
            name : '',
            description : '',
            created_at : '',
            size : ''
        }
    }

    attPesquisa = async (git) => {
        await this.setState({pesquisa : git.target.value})
        console.log(this.state.pesquisa)
    }

    pesquisar = (event) =>{

        this.state.name = this.state.pesquisa

        event.preventDefault();

        fetch('https://api.github.com/users/'+ this.state.pesquisa +'/repos')

        .then(reposta => reposta.json())

        .then(data => this.setState({repositories : data}))

        .then(console.log(this.state.repositories))

        .catch( (erro) => console.log(erro) )
    }

    render(){
        return(
            <div className='content'>
                <main>
                    <div className='titulo'>
                        <h2>Digite o nome do usuario que você deseja pesquisar</h2>
                    </div>
                    <form onSubmit={this.pesquisar}>
                        <div className='alinhamento'>
                            <div className='pesquisar'>
                                <input
                                    className='barra'
                                    type='text'
                                    value={this.state.pesquisa}
                                    onChange={this.attPesquisa}
                                    placeholder="USERNAME"
                                 />

                                 <button className='botao' type='submit'>Pesquisar</button>
                            </div>
                        </div>
                    </form>

                    <section>
                        <div className='titulo'>
                            <h2>Registros de: {this.state.name}</h2>
                        </div>
                        <div>
                            <table className='mostrando content'>
                                <tbody>
                                    {
                                        this.state.repositories.map( (git) => {
                                            return(
                                                <tr key={git.id}>
                                                    <div className='alinhamento'>
                                                        <div className='conteudo'>
                                                            <td id='id'>{git.id}</td>
                                                            <td id='nome'>{git.name}</td>
                                                            <td id='desc'>{git.description}</td>
                                                            <td id='data'>{git.created_at}</td>
                                                            <td id='size'>{git.size}</td>
                                                        </div>
                                                    </div>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}

export default GitApi