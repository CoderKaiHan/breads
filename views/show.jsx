const React = require('react');
const Default = require('./layouts/default');

function Show ({bread, index}){
        return (
            <Default>
                <h2>Show Page</h2>
                <h3>{bread.name}</h3>
                <p>
                    and it 
                    {
                        bread.hasGluten
                        ? <span> does </span>
                        :<span> does NOT </span>
                    }
                    have gluten.
                </p>
                <div>
                    Ingredients: {bread.ingredients}.
                </div>
                <img src={bread.image} alt={bread.name} />
                <li><a href="/breads">Go home</a></li>
                <a href={`/breads/${bread.id}/edit`}><button>Edit</button></a>
                <form action={`/breads/${bread.id}?_method=DELETE`} method="POST">
                    <input type='submit' value="DELETE"/>
                </form>

            </Default>
        );
}

module.exports = Show;