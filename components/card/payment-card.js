import React from "react";
import cn from "classnames";

import styles from "./payment-card.module.css";
import Card from "./card";
import CardIcon from './card-icon'

function PaymentCard({paypalMethod=false}) {
  return (
    <div>
    <div className={styles.cardTitle}>
      <span>Payment Method</span>
    </div>
    {!paypalMethod && <Card height={205} width={315}>
      <div className={cn(styles.optionCard)}>
        <form>
          <div>
            <label className={cn(styles.label)}>
              <input
                name="Method"
                id="Card"
                type="radio"
                value="Door"
                checked="checked"
              />
              <CardIcon className={cn(styles.icon)} card></CardIcon>
              <span className={cn(styles.checkmark)}>Card</span>
              
            </label>
          </div>
          <hr></hr>
          <div>
            
            <label className={cn(styles.label)}>
            <input
              name="Method"
              id="Bank-Account"
              type="radio"
              value="Pick"
              checked="checked"
            />
            <span className={cn(styles.checkmark)}></span>
            <CardIcon className={cn(styles.icon)} bank></CardIcon>
            Bank Account
            </label>
          </div>
        </form>
      </div>
    </Card>}
    {paypalMethod && <Card height={231} width={315}>
      <div className={cn(styles.optionCard)}>
        <form>
          <div>
            <label className={cn(styles.label)}>
              <input
                name="Method"
                id="Card"
                type="radio"
                value="Door"
                checked="checked"
              />
              <CardIcon className={cn(styles.icon)} card></CardIcon>
              <span className={cn(styles.checkmark)}>Card</span>
              
            </label>
          </div>
          <hr></hr>
          <div>
            
            <label className={cn(styles.label)}>
            <input
              name="Method"
              id="Bank-Account"
              type="radio"
              value="Pick"
              checked="checked"
            />
            <span className={cn(styles.checkmark)}></span>
            <CardIcon className={cn(styles.icon)} bank></CardIcon>
            Bank Account
            </label>
          </div>
          <hr/>
          {paypalMethod && <div>
            <label className={cn(styles.label)}>
              <input
                name="Method"
                id="Paypal"
                type="radio"
                value="Door"
                checked="checked"
              />
              <span className={cn(styles.checkmark)}></span>
              <CardIcon className={cn(styles.icon)} paypal></CardIcon>
              Paypal
            </label>
          </div>}
        </form>
      </div>
    </Card>}
    </div>
  );
}

export default PaymentCard;