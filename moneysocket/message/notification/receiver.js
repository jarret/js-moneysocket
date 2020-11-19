// Copyright (c) 2020 Jarret Dyrbye
// Distributed under the MIT software license, see the accompanying
// file LICENSE or http://www.opensource.org/licenses/mit-license.php



/* we need to require all the classes so they rgister to the REQUEST_SUBCLASSES
 * dictionary */

const NotifyError = require('./error.js').NotifyError;
const NotifyPong = require('./pong.js').NotifyPong;
const NotifyRendezvous = require('./rendezvous.js').NotifyRendezvous;
const NotifyRendezvousNotReady = require(
    './rendezvous_not_ready.js').NotifyRendezvousNotReady;
const NotifyRendezvousEnd = require('./rendezvous_end.js').NotifyRendezvousEnd;
const NotifyProvider = require('./provider.js').NotifyProvider;
const NotifyProviderNotReady = require(
    './provider_not_ready.js').NotifyProviderNotReady;

const NotifyInvoice = require('./invoice.js').NotifyInvoice;
const NotifyPreimage = require('./preimage.js').NotifyPreimage;

class NotificationReceiver {
}

exports.NotificationReceiver = NotificationReceiver;
