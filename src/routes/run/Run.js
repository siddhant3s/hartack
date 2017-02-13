import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Button from 'react-bootstrap';
import s from '../browse/Browse.css';
import RecipieList from '../../components/RecipieList';


const title = 'Running Recipes';


class Run extends React.Component {
  static propTypes = {
    recipies: PropTypes.arrayOf(PropTypes.object),
    harName: PropTypes.string,
    harText: PropTypes.string,
  };

  state = {
    runningRecipie: null,
    outputs: {},
  }

  componentDidMount() {
    console.log('ALL RECIPIE', this.props.recipies);
    const outputs = {}
    this.props.recipies.forEach(
      r => {
        const o = this.runRecipie(r, this.props.harText);
        outputs[r.name] = o;
      }
    );
    this.setState({ outputs });
  }

  runRecipie(recipie, text) {
    console.log('running', recipie.name);
    const body = `(${recipie.definition})`;
    const func = eval(body);
    return func(JSON.parse(text));
  }

  render() {
    this.context.setTitle(title);
    const { harName, harText, recipies } = this.props;
    console.log('state', this.state.outputs);
    const entries = Object.entries(this.state.outputs).map(e => {
      const [k, v] = e;
      let errors = null;
      if (v.errors) {
        errors = v.errors.map((er, i) => <span key={i}>{er}</span>);
      }

      return (<div key={k}>
        Recipie: {k} |
        Output: {v.status ? <button className={s.pass}>PASS</button> : <button className={s.failed}>FAILED</button> } | {errors}</div>);
    });
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{title} {this.state.runningRecipie}</h1>
          <h3><small>{harName} ({harText.length} bytes)</small></h3>
          <div>{entries}</div>
        </div>
      </div>
    );
  }
}

Run.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Run);
