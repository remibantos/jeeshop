module.exports = [{
    "id": 1,
    "name": "userRegistration",
    "locale": "fr",
    "content": "<div style=\"width:100%;text-align:center\">\n    <a href=\"https://apps-jeeshop.rhcloud.com\">\n        <img src=\"https://apps-jeeshop.rhcloud.com/jeeshop-store/images/logo.png\" style=\" width: 10em; height: auto; padding-bottom: 1em;\" alt=\"Jeeshop store demo\">\n    </a>\n</div>\n\n<h3>Bienvenue ${gender} ${firstname} ${lastname},</h3>\n\n<p>Vous venez de cr&eacute;er un compte <a href=\"https://apps-jeeshop.rhcloud.com\"><em>Jeeshop store demo</em></a>.</p>\n\n<p>Nous vous invitons &agrave; copier le lien ci-dessous dans la barre d'adresse de votre navigateur internet afin d&#39;activer votre compte&nbsp;: <em>(1)</em></p>\n<pre>&nbsp;</pre>\n<pre>https://apps-jeeshop.rhcloud.com/jeeshop-store/#!/activation/${login}/${actionToken}</pre>\n<pre>&nbsp;</pre>\n<p>A tr&egrave;s bient&ocirc;t</p>",
    "subject": "Activation de votre compte Jeeshop store demo",
    "creationDate": 1452476528000,
    "updateDate": null
}, {
    "id": 2,
    "name": "userRegistration",
    "locale": "en",
    "content": "<div style=\"width:100%;text-align:center\">\n    <a href=\"https://apps-jeeshop.rhcloud.com\">\n        <img src=\"https://apps-jeeshop.rhcloud.com/jeeshop-store/images/logo.png\" style=\" width: 10em; height: auto; padding-bottom: 1em;\" alt=\"Jeeshop store demo\">\n    </a>\n</div>\n\n<h3>Welcome ${gender} ${firstname} ${lastname},</h3>\n\n<p>You have subscribed to <a href=\"https://apps-jeeshop.rhcloud.com\"><em>Jeeshop store demo</em></a>.</p>\n\n<p>Please activate your account by clicking on link below : <em>(1)</em></p>\n<pre>&nbsp;</pre>\n<pre>https://apps-jeeshop.rhcloud.com/jeeshop-store/#!/activation/${login}/${actionToken}</pre>\n<pre>&nbsp;</pre>\n<p>Best regards</p>",
    "subject": "Activation of your Jeeshop store demo account",
    "creationDate": 1452476591000,
    "updateDate": null
}, {
    "id": 3,
    "name": "userResetPassword",
    "locale": "fr",
    "content": "<div style=\"width:100%;text-align:center\">\n    <a href=\"https://apps-jeeshop.rhcloud.com\">\n        <img src=\"https://apps-jeeshop.rhcloud.com/jeeshop-store/images/logo.png\" style=\" width: 10em; height: auto; padding-bottom: 1em;\" alt=\"Jeeshop store demo\">\n    </a>\n</div>\n\n<h3>Bonjour ${gender} ${firstname} ${lastname},</h3>\n\n<p>Vous venez d&#39;effectuer une demande de r&eacute;initialisation de votre mot de passe sur <a href=\"https://apps-jeeshop.rhcloud.com\"><em>Jeeshop store demo</em></a>.</p>\n\n<p>Nous vous invitons &agrave; copier le lien ci-dessous dans la barre d'adresse de votre navigateur internet afin de r&eacute;initialiser votre mot de passe : <em>(1)</em></p>\n<pre>&nbsp;</pre>\n<pre>https://apps-jeeshop.rhcloud.com/jeeshop-store/#!/resetpassword/${login}/${actionToken}</pre>\n<pre>&nbsp;</pre>\n<p>A tr&egrave;s bient&ocirc;t,</p>",
    "subject": "Réinitialisation de votre mot de passe Jeeshop store demo",
    "creationDate": 1452476659000,
    "updateDate": null
}, {
    "id": 4,
    "name": "userResetPassword",
    "locale": "en",
    "content": "<div style=\"width:100%;text-align:center\">\n    <a href=\"https://apps-jeeshop.rhcloud.com\">\n        <img src=\"https://apps-jeeshop.rhcloud.com/jeeshop-store/images/logo.png\" style=\" width: 10em; height: auto; padding-bottom: 1em;\" alt=\"Jeeshop store demo\">\n    </a>\n</div>\n\n<h3>Hello ${gender} ${firstname} ${lastname},</h3>\n\n<p>You have have submitted the reset password from <a href=\"https://apps-jeeshop.rhcloud.com\"><em>Jeeshop store demo</em></a>.</p>\n\n<p>Please click on link below to reset your password : <em>(1)</em></p>\n<pre>&nbsp;</pre>\n<pre>https://apps-jeeshop.rhcloud.com/jeeshop-store/#!/resetpassword/${login}/${actionToken}</pre>\n<pre>&nbsp;</pre>\n<p>Best regards</p>",
    "subject": "Reset of your Jeeshop store demo password",
    "creationDate": 1452476712000,
    "updateDate": null
}, {
    "id": 5,
    "name": "orderValidated",
    "locale": "fr",
    "content": "<div style=\"width:100%;text-align:center\">\n    <a href=\"https://apps-jeeshop.rhcloud.com\">\n        <img src=\"https://apps-jeeshop.rhcloud.com/jeeshop-store/images/logo.png\" style=\" width: 10em; height: auto; padding-bottom: 1em;\" alt=\"Jeeshop store demo\">\n    </a>\n</div>\n\n<h3>Bonjour ${user.gender} ${user.firstname} ${user.lastname},</h3>\n\n<p>Nous avons le plaisir de vous confirmer la validation de votre commande numéro <strong>${reference}</strong></p>\n\n<p>Vous recevrez prochainement un e-mail lors de son expédition par nos services.</p>\n\n<h3><em>Détail : </em></h3>\n\n<table style=\"width:100%;border-width:1px; border-style=solid; text-align:justify\">\n    <thead>\n    <th></th>\n    <th>Article</th>\n    <th>Quantité</th>\n    <th>Prix</th>\n    </thead>\n    <tbody>\n    <#list items as item>\n    <tr>\n        <td style=\"text-align:center\">\n            <img src=\"https://apps-jeeshop.rhcloud.com/jeeshop-media/${item.presentationImageURI}\" style=\"width:4em;height:auto\"></img>\n        </td>\n        <td>${item.displayName}</td>\n        <td>${item.quantity}</td>\n        <td>${item.price} € TTC</td>\n    </tr>\n    </#list>\n    <tr>\n        <td style=\"text-align:center\">\n        </td>\n        <td>Livraison par transporteur</td>\n        <td></td>\n        <td>${deliveryFee} € TTC</td>\n    </tr>\n    <#list orderDiscounts as orderDiscount>\n    <tr>\n        <td style=\"text-align:center\">\n        </td>\n        <td>${orderDiscount.displayName}</td>\n        <td></td>\n        <td>- ${orderDiscount.discountValue} <#if orderDiscount.rateType>%<#else>€ TTC</#if></td>\n    </tr>\n    </#list>\n    <tr>\n        <td></td>\n        <td></td>\n        <td><i>Total HT</i></td>\n        <td><i>#{price*100/(100+vat); m2M2} €</i></td>\n    </tr>\n    <tr>\n        <td></td>\n        <td></td>\n        <td><b><i>Total TTC</i><b></td>\n        <td><b><i>${price} €</i></b></td>\n    </tr>\n    </tbody>\n</table>\n<br/>\n\n<table style=\"width:100%\">\n    <tr>\n        <td style=\"width:45%\">\n            <h4>Adresse de livraison</h4>\n            <p>\n            ${deliveryAddress.gender}\n  ${deliveryAddress.firstname}\n  ${deliveryAddress.lastname}\n            </p>\n\n            <p>\n                <b><i>Société</i></b>\n                <br/>\n            ${deliveryAddress.company!''}\n            </p>\n\n            <p>\n                <b><i>Adresse</i></b>\n                <br/>\n            ${deliveryAddress.street}\n                <br/>\n            ${deliveryAddress.city}\n                <br/>\n            ${deliveryAddress.zipCode}\n            </p>\n\n            <p>\n                <b><i>Pays</i></b>\n                <br/>\n            ${deliveryAddress.countryIso3Code}\n            </p>\n        </td>\n        <td style=\"width:10%\"></td>\n        <td style=\"width:45%\">\n            <h4>Adresse de facturation</h4>\n            <p>\n            ${billingAddress.gender}\n  ${billingAddress.firstname}\n  ${billingAddress.lastname}\n            </p>\n\n            <p>\n                <b><i>Société</i></b>\n                <br/>\n            ${billingAddress.company!''}\n            </p>\n\n            <p>\n                <b><i>Adresse</i></b>\n                <br/>\n            ${billingAddress.street}\n                <br/>\n            ${billingAddress.city}\n                <br/>\n            ${billingAddress.zipCode}\n            </p>\n\n            <p>\n                <b><i>Pays</i></b>\n                <br/>\n            ${billingAddress.countryIso3Code}\n            </p>\n        </td>\n    </tr>\n</table>\n\n<p>Cordialement</p>",
    "subject": "Confirmation de votre commande",
    "creationDate": 1452476793000,
    "updateDate": null
}, {
    "id": 6,
    "name": "orderValidated",
    "locale": "en",
    "content": "<div style=\"width:100%;text-align:center\">\n    <a href=\"https://apps-jeeshop.rhcloud.com\">\n        <img src=\"https://apps-jeeshop.rhcloud.com/jeeshop-store/images/logo.png\" style=\" width: 10em; height: auto; padding-bottom: 1em;\" alt=\"Jeeshop store demo\">\n    </a>\n</div>\n\n<h3>Hello ${user.gender} ${user.firstname} ${user.lastname},</h3>\n\n<p>We are glad to confim the validation of your order <strong>${reference}</strong></p>\n\n<p>You will receive another e-mail when it will be shipped.</p>\n\n<h3><em>Details :</em></h3>\n\n<table style=\"width:100%;border-width:1px; border-style=solid; text-align:justify\">\n    <thead>\n    <th></th>\n    <th>Item</th>\n    <th>Quantity</th>\n    <th>Price</th>\n    </thead>\n    <tbody>\n    <#list items as item>\n    <tr>\n        <td style=\"text-align:center\">\n            <img src=\"https://apps-jeeshop.rhcloud.com/jeeshop-media/${item.presentationImageURI}\" style=\"width:4em;height:auto\"></img>\n        </td>\n        <td>${item.displayName}</td>\n        <td>${item.quantity}</td>\n        <td>${item.price} €</td>\n    </tr>\n    </#list>\n    <tr>\n        <td style=\"text-align:center\">\n        </td>\n        <td>Package delivery company</td>\n        <td></td>\n        <td>${deliveryFee} €</td>\n    </tr>\n    <#list orderDiscounts as orderDiscount>\n    <tr>\n        <td style=\"text-align:center\">\n        </td>\n        <td>${orderDiscount.displayName}</td>\n        <td></td>\n        <td>- ${orderDiscount.discountValue} <#if orderDiscount.rateType>%<#else>€</#if></td>\n    </tr>\n    </#list>\n    <tr>\n        <td></td>\n        <td></td>\n        <td><i>Total HT</i></td>\n        <td><i>#{price*100/(100+vat); m2M2} €</i></td>\n    </tr>\n    <tr>\n        <td></td>\n        <td></td>\n        <td><b><i>Total TTC</i><b></td>\n        <td><b><i>${price} €</i></b></td>\n    </tr>\n    </tbody>\n</table>\n<br/>\n\n<table style=\"width:100%\">\n    <tr>\n        <td style=\"width:45%\">\n            <h4>Delivery address</h4>\n            <p>\n            ${deliveryAddress.gender}\n  ${deliveryAddress.firstname}\n  ${deliveryAddress.lastname}\n            </p>\n\n            <p>\n                <b><i>Company</i></b>\n                <br/>\n            ${deliveryAddress.company!''}\n            </p>\n\n            <p>\n                <b><i>Address</i></b>\n                <br/>\n            ${deliveryAddress.street}\n                <br/>\n            ${deliveryAddress.city}\n                <br/>\n            ${deliveryAddress.zipCode}\n            </p>\n\n            <p>\n                <b><i>Country</i></b>\n                <br/>\n            ${deliveryAddress.countryIso3Code}\n            </p>\n        </td>\n        <td style=\"width:10%\"></td>\n        <td style=\"width:45%\">\n            <h4>Billing address</h4>\n            <p>\n            ${billingAddress.gender}\n  ${billingAddress.firstname}\n  ${billingAddress.lastname}\n            </p>\n\n            <p>\n                <b><i>Company</i></b>\n                <br/>\n            ${billingAddress.company!''}\n            </p>\n\n            <p>\n                <b><i>Address</i></b>\n                <br/>\n            ${billingAddress.street}\n                <br/>\n            ${billingAddress.city}\n                <br/>\n            ${billingAddress.zipCode}\n            </p>\n\n            <p>\n                <b><i>Country</i></b>\n                <br/>\n            ${billingAddress.countryIso3Code}\n            </p>\n        </td>\n    </tr>\n</table>\n\n<p>Best regards</p>",
    "subject": "Confirmation of your order",
    "creationDate": 1452476829000,
    "updateDate": null
}]