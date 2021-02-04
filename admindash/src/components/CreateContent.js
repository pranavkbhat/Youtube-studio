import React from 'react'
import {Create, DateInput, NumberInput, SimpleForm, TextInput, AutocompleteInput } from 'react-admin'

function CreateContent(props) {
    return (
       <Create title='Add an Content' {...props}>
           <SimpleForm>
                <TextInput source='Title' />
                <TextInput multiline source='Description' />
                <AutocompleteInput source="Visibility" choices={[
                    { id: 'Public', name: 'Public' },
                    { id: 'Private', name: 'Private' },
                    { id: 'Unlisted', name: 'Unlisted' },
                ]} />
                <DateInput source='PublishedOn' />
                <NumberInput source='Views' />
                <NumberInput source='Likes' />
                <NumberInput source='Dislikes' />
                <NumberInput source='Comments' />
           </SimpleForm>
       </Create>
    )
}

export default CreateContent
