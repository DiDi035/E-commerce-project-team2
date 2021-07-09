class GetAllCustomer {
    constructor({ customerDaos }) {
        this.customerDaos = customerDaos;
    }
    async execute() {
        const customers = await this.customerDaos.getAll();
        if (!customers) {
            return {
                failure: true,
                message: "customer not found",
            };
        }
        return customers;
    }
}

module.exports = GetAllCustomer;