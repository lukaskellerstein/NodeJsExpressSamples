var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var e_1, _a;
import { NatsService } from "./nats-service.js";
console.log("client-1", "start");
try {
    const natsService = new NatsService();
    await natsService.connect();
    const topic = "some-topic";
    const subscription = natsService.subscribe(topic);
    try {
        for (var subscription_1 = __asyncValues(subscription), subscription_1_1; subscription_1_1 = await subscription_1.next(), !subscription_1_1.done;) {
            const m = subscription_1_1.value;
            console.log(`[${subscription.getProcessed()}]: ${JSON.stringify(natsService.decode(m.data), null, 2)}`);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (subscription_1_1 && !subscription_1_1.done && (_a = subscription_1.return)) await _a.call(subscription_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    console.log("subscription closed");
}
catch (err) {
    console.log(`error connecting`, err);
}
console.log("client-1", "ends");
