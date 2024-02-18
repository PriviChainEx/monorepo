fn main(current_balance : Field, token_value : Field ,  receiver_chainID: Field,  new_balance: pub Field, intended_receiver_chainID: Field) -> () {

    let calculated_new_balance = current_balance + token_value;


    assert_eq(new_balance, calculated_new_balance);


    assert_eq(receiver_chainID, intended_receiver_chainID);
    
}
