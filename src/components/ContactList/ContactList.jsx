import { ConactListWrapper } from "./ContactList.styled";

export const ContactList = ({ contacts, deleteContact }) => {
    return (
        <ConactListWrapper>
            {contacts.map(({ name, id, number }) => {
                return <li key={id} className="contact">
                    <p>{name}:<span className="number">{number}</span></p> <button className="delete-button" onClick={()=> deleteContact(id)} type="button">Delete</button>
                </li>
            })}
        </ConactListWrapper>
    );
};