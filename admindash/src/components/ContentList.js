import React from 'react'
import {List, Datagrid, TextField, DateField, EditButton, DeleteButton} from 'react-admin'

function ContentList(props) {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source='Title' />
                <TextField source='Description' />
                <TextField source='Visibility'/>
                <DateField source='PublishedOn' />
                <TextField source='Views' />
                <TextField source='Likes' />
                <TextField source='Dislikes' />
                <TextField source='Comments' />
                <EditButton basePath='/contents' />
                <DeleteButton basePath='/contents' />
            </Datagrid>
        </List>
    )
}

export default ContentList
