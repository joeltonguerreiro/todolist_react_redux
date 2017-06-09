import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { changeDescription } from './todoActions'

const TodoForm = props => {

    const keyHandler = (e) => {
        if(e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }
 
    return (
        <div role='form' className='todoForm'>
            <Grid cols='12 9 10'>
                <input id='description' className='form-control'
                    placeholder='Adicione uma tarefa'
                    value={props.description}
                    onChange={props.changeDescription} 
                    onKeyUp={keyHandler}></input>
            </Grid>
            <Grid cols='12 3 2'>
                <IconButton style='primary' icon='plus' 
                    onClick={props.handleAdd} hide={false}/>
                <IconButton style='info' icon='search' 
                    onClick={props.handleSearch} hide={false}/>
                <IconButton style='default' icon='times' 
                    onClick={props.handleClear} hide={false}/>
            </Grid>
        </div>
    )
}

const mapStateToProps = state => ({description: state.todo.description})
const mapDispacthToProps = dispatch => bindActionCreators({ changeDescription }, dispatch)
export default connect(mapStateToProps, mapDispacthToProps)(TodoForm)