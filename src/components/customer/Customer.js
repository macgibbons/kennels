import React from "react"

export default ({customer}) => (
    <section className="customer">
        <h3 className="customer__name">{customer.name}</h3>
        <address>
            <div className="customer__address">{customer.address}</div>
        </address>
    </section>
)




