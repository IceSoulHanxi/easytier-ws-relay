/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const error = $root.error = (() => {

    /**
     * Namespace error.
     * @exports error
     * @namespace
     */
    const error = {};

    error.OtherError = (function() {

        /**
         * Properties of an OtherError.
         * @memberof error
         * @interface IOtherError
         * @property {string|null} [errorMessage] OtherError errorMessage
         */

        /**
         * Constructs a new OtherError.
         * @memberof error
         * @classdesc Represents an OtherError.
         * @implements IOtherError
         * @constructor
         * @param {error.IOtherError=} [properties] Properties to set
         */
        function OtherError(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OtherError errorMessage.
         * @member {string} errorMessage
         * @memberof error.OtherError
         * @instance
         */
        OtherError.prototype.errorMessage = "";

        /**
         * Creates a new OtherError instance using the specified properties.
         * @function create
         * @memberof error.OtherError
         * @static
         * @param {error.IOtherError=} [properties] Properties to set
         * @returns {error.OtherError} OtherError instance
         */
        OtherError.create = function create(properties) {
            return new OtherError(properties);
        };

        /**
         * Encodes the specified OtherError message. Does not implicitly {@link error.OtherError.verify|verify} messages.
         * @function encode
         * @memberof error.OtherError
         * @static
         * @param {error.IOtherError} message OtherError message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OtherError.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errorMessage != null && Object.hasOwnProperty.call(message, "errorMessage"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.errorMessage);
            return writer;
        };

        /**
         * Encodes the specified OtherError message, length delimited. Does not implicitly {@link error.OtherError.verify|verify} messages.
         * @function encodeDelimited
         * @memberof error.OtherError
         * @static
         * @param {error.IOtherError} message OtherError message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OtherError.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OtherError message from the specified reader or buffer.
         * @function decode
         * @memberof error.OtherError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {error.OtherError} OtherError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OtherError.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.error.OtherError();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.errorMessage = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OtherError message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof error.OtherError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {error.OtherError} OtherError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OtherError.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OtherError message.
         * @function verify
         * @memberof error.OtherError
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OtherError.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                if (!$util.isString(message.errorMessage))
                    return "errorMessage: string expected";
            return null;
        };

        /**
         * Creates an OtherError message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof error.OtherError
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {error.OtherError} OtherError
         */
        OtherError.fromObject = function fromObject(object) {
            if (object instanceof $root.error.OtherError)
                return object;
            let message = new $root.error.OtherError();
            if (object.errorMessage != null)
                message.errorMessage = String(object.errorMessage);
            return message;
        };

        /**
         * Creates a plain object from an OtherError message. Also converts values to other types if specified.
         * @function toObject
         * @memberof error.OtherError
         * @static
         * @param {error.OtherError} message OtherError
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OtherError.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.errorMessage = "";
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                object.errorMessage = message.errorMessage;
            return object;
        };

        /**
         * Converts this OtherError to JSON.
         * @function toJSON
         * @memberof error.OtherError
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OtherError.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for OtherError
         * @function getTypeUrl
         * @memberof error.OtherError
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        OtherError.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/error.OtherError";
        };

        return OtherError;
    })();

    error.InvalidMethodIndex = (function() {

        /**
         * Properties of an InvalidMethodIndex.
         * @memberof error
         * @interface IInvalidMethodIndex
         * @property {string|null} [serviceName] InvalidMethodIndex serviceName
         * @property {number|null} [methodIndex] InvalidMethodIndex methodIndex
         */

        /**
         * Constructs a new InvalidMethodIndex.
         * @memberof error
         * @classdesc Represents an InvalidMethodIndex.
         * @implements IInvalidMethodIndex
         * @constructor
         * @param {error.IInvalidMethodIndex=} [properties] Properties to set
         */
        function InvalidMethodIndex(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * InvalidMethodIndex serviceName.
         * @member {string} serviceName
         * @memberof error.InvalidMethodIndex
         * @instance
         */
        InvalidMethodIndex.prototype.serviceName = "";

        /**
         * InvalidMethodIndex methodIndex.
         * @member {number} methodIndex
         * @memberof error.InvalidMethodIndex
         * @instance
         */
        InvalidMethodIndex.prototype.methodIndex = 0;

        /**
         * Creates a new InvalidMethodIndex instance using the specified properties.
         * @function create
         * @memberof error.InvalidMethodIndex
         * @static
         * @param {error.IInvalidMethodIndex=} [properties] Properties to set
         * @returns {error.InvalidMethodIndex} InvalidMethodIndex instance
         */
        InvalidMethodIndex.create = function create(properties) {
            return new InvalidMethodIndex(properties);
        };

        /**
         * Encodes the specified InvalidMethodIndex message. Does not implicitly {@link error.InvalidMethodIndex.verify|verify} messages.
         * @function encode
         * @memberof error.InvalidMethodIndex
         * @static
         * @param {error.IInvalidMethodIndex} message InvalidMethodIndex message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InvalidMethodIndex.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.serviceName != null && Object.hasOwnProperty.call(message, "serviceName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.serviceName);
            if (message.methodIndex != null && Object.hasOwnProperty.call(message, "methodIndex"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.methodIndex);
            return writer;
        };

        /**
         * Encodes the specified InvalidMethodIndex message, length delimited. Does not implicitly {@link error.InvalidMethodIndex.verify|verify} messages.
         * @function encodeDelimited
         * @memberof error.InvalidMethodIndex
         * @static
         * @param {error.IInvalidMethodIndex} message InvalidMethodIndex message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InvalidMethodIndex.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an InvalidMethodIndex message from the specified reader or buffer.
         * @function decode
         * @memberof error.InvalidMethodIndex
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {error.InvalidMethodIndex} InvalidMethodIndex
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InvalidMethodIndex.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.error.InvalidMethodIndex();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.serviceName = reader.string();
                        break;
                    }
                case 2: {
                        message.methodIndex = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an InvalidMethodIndex message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof error.InvalidMethodIndex
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {error.InvalidMethodIndex} InvalidMethodIndex
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InvalidMethodIndex.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an InvalidMethodIndex message.
         * @function verify
         * @memberof error.InvalidMethodIndex
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        InvalidMethodIndex.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.serviceName != null && message.hasOwnProperty("serviceName"))
                if (!$util.isString(message.serviceName))
                    return "serviceName: string expected";
            if (message.methodIndex != null && message.hasOwnProperty("methodIndex"))
                if (!$util.isInteger(message.methodIndex))
                    return "methodIndex: integer expected";
            return null;
        };

        /**
         * Creates an InvalidMethodIndex message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof error.InvalidMethodIndex
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {error.InvalidMethodIndex} InvalidMethodIndex
         */
        InvalidMethodIndex.fromObject = function fromObject(object) {
            if (object instanceof $root.error.InvalidMethodIndex)
                return object;
            let message = new $root.error.InvalidMethodIndex();
            if (object.serviceName != null)
                message.serviceName = String(object.serviceName);
            if (object.methodIndex != null)
                message.methodIndex = object.methodIndex >>> 0;
            return message;
        };

        /**
         * Creates a plain object from an InvalidMethodIndex message. Also converts values to other types if specified.
         * @function toObject
         * @memberof error.InvalidMethodIndex
         * @static
         * @param {error.InvalidMethodIndex} message InvalidMethodIndex
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        InvalidMethodIndex.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.serviceName = "";
                object.methodIndex = 0;
            }
            if (message.serviceName != null && message.hasOwnProperty("serviceName"))
                object.serviceName = message.serviceName;
            if (message.methodIndex != null && message.hasOwnProperty("methodIndex"))
                object.methodIndex = message.methodIndex;
            return object;
        };

        /**
         * Converts this InvalidMethodIndex to JSON.
         * @function toJSON
         * @memberof error.InvalidMethodIndex
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        InvalidMethodIndex.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for InvalidMethodIndex
         * @function getTypeUrl
         * @memberof error.InvalidMethodIndex
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        InvalidMethodIndex.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/error.InvalidMethodIndex";
        };

        return InvalidMethodIndex;
    })();

    error.InvalidService = (function() {

        /**
         * Properties of an InvalidService.
         * @memberof error
         * @interface IInvalidService
         * @property {string|null} [serviceName] InvalidService serviceName
         */

        /**
         * Constructs a new InvalidService.
         * @memberof error
         * @classdesc Represents an InvalidService.
         * @implements IInvalidService
         * @constructor
         * @param {error.IInvalidService=} [properties] Properties to set
         */
        function InvalidService(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * InvalidService serviceName.
         * @member {string} serviceName
         * @memberof error.InvalidService
         * @instance
         */
        InvalidService.prototype.serviceName = "";

        /**
         * Creates a new InvalidService instance using the specified properties.
         * @function create
         * @memberof error.InvalidService
         * @static
         * @param {error.IInvalidService=} [properties] Properties to set
         * @returns {error.InvalidService} InvalidService instance
         */
        InvalidService.create = function create(properties) {
            return new InvalidService(properties);
        };

        /**
         * Encodes the specified InvalidService message. Does not implicitly {@link error.InvalidService.verify|verify} messages.
         * @function encode
         * @memberof error.InvalidService
         * @static
         * @param {error.IInvalidService} message InvalidService message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InvalidService.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.serviceName != null && Object.hasOwnProperty.call(message, "serviceName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.serviceName);
            return writer;
        };

        /**
         * Encodes the specified InvalidService message, length delimited. Does not implicitly {@link error.InvalidService.verify|verify} messages.
         * @function encodeDelimited
         * @memberof error.InvalidService
         * @static
         * @param {error.IInvalidService} message InvalidService message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InvalidService.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an InvalidService message from the specified reader or buffer.
         * @function decode
         * @memberof error.InvalidService
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {error.InvalidService} InvalidService
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InvalidService.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.error.InvalidService();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.serviceName = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an InvalidService message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof error.InvalidService
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {error.InvalidService} InvalidService
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InvalidService.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an InvalidService message.
         * @function verify
         * @memberof error.InvalidService
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        InvalidService.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.serviceName != null && message.hasOwnProperty("serviceName"))
                if (!$util.isString(message.serviceName))
                    return "serviceName: string expected";
            return null;
        };

        /**
         * Creates an InvalidService message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof error.InvalidService
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {error.InvalidService} InvalidService
         */
        InvalidService.fromObject = function fromObject(object) {
            if (object instanceof $root.error.InvalidService)
                return object;
            let message = new $root.error.InvalidService();
            if (object.serviceName != null)
                message.serviceName = String(object.serviceName);
            return message;
        };

        /**
         * Creates a plain object from an InvalidService message. Also converts values to other types if specified.
         * @function toObject
         * @memberof error.InvalidService
         * @static
         * @param {error.InvalidService} message InvalidService
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        InvalidService.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.serviceName = "";
            if (message.serviceName != null && message.hasOwnProperty("serviceName"))
                object.serviceName = message.serviceName;
            return object;
        };

        /**
         * Converts this InvalidService to JSON.
         * @function toJSON
         * @memberof error.InvalidService
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        InvalidService.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for InvalidService
         * @function getTypeUrl
         * @memberof error.InvalidService
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        InvalidService.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/error.InvalidService";
        };

        return InvalidService;
    })();

    error.ProstDecodeError = (function() {

        /**
         * Properties of a ProstDecodeError.
         * @memberof error
         * @interface IProstDecodeError
         */

        /**
         * Constructs a new ProstDecodeError.
         * @memberof error
         * @classdesc Represents a ProstDecodeError.
         * @implements IProstDecodeError
         * @constructor
         * @param {error.IProstDecodeError=} [properties] Properties to set
         */
        function ProstDecodeError(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ProstDecodeError instance using the specified properties.
         * @function create
         * @memberof error.ProstDecodeError
         * @static
         * @param {error.IProstDecodeError=} [properties] Properties to set
         * @returns {error.ProstDecodeError} ProstDecodeError instance
         */
        ProstDecodeError.create = function create(properties) {
            return new ProstDecodeError(properties);
        };

        /**
         * Encodes the specified ProstDecodeError message. Does not implicitly {@link error.ProstDecodeError.verify|verify} messages.
         * @function encode
         * @memberof error.ProstDecodeError
         * @static
         * @param {error.IProstDecodeError} message ProstDecodeError message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProstDecodeError.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ProstDecodeError message, length delimited. Does not implicitly {@link error.ProstDecodeError.verify|verify} messages.
         * @function encodeDelimited
         * @memberof error.ProstDecodeError
         * @static
         * @param {error.IProstDecodeError} message ProstDecodeError message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProstDecodeError.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ProstDecodeError message from the specified reader or buffer.
         * @function decode
         * @memberof error.ProstDecodeError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {error.ProstDecodeError} ProstDecodeError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProstDecodeError.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.error.ProstDecodeError();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ProstDecodeError message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof error.ProstDecodeError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {error.ProstDecodeError} ProstDecodeError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProstDecodeError.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ProstDecodeError message.
         * @function verify
         * @memberof error.ProstDecodeError
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ProstDecodeError.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a ProstDecodeError message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof error.ProstDecodeError
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {error.ProstDecodeError} ProstDecodeError
         */
        ProstDecodeError.fromObject = function fromObject(object) {
            if (object instanceof $root.error.ProstDecodeError)
                return object;
            return new $root.error.ProstDecodeError();
        };

        /**
         * Creates a plain object from a ProstDecodeError message. Also converts values to other types if specified.
         * @function toObject
         * @memberof error.ProstDecodeError
         * @static
         * @param {error.ProstDecodeError} message ProstDecodeError
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProstDecodeError.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ProstDecodeError to JSON.
         * @function toJSON
         * @memberof error.ProstDecodeError
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProstDecodeError.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ProstDecodeError
         * @function getTypeUrl
         * @memberof error.ProstDecodeError
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ProstDecodeError.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/error.ProstDecodeError";
        };

        return ProstDecodeError;
    })();

    error.ProstEncodeError = (function() {

        /**
         * Properties of a ProstEncodeError.
         * @memberof error
         * @interface IProstEncodeError
         */

        /**
         * Constructs a new ProstEncodeError.
         * @memberof error
         * @classdesc Represents a ProstEncodeError.
         * @implements IProstEncodeError
         * @constructor
         * @param {error.IProstEncodeError=} [properties] Properties to set
         */
        function ProstEncodeError(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ProstEncodeError instance using the specified properties.
         * @function create
         * @memberof error.ProstEncodeError
         * @static
         * @param {error.IProstEncodeError=} [properties] Properties to set
         * @returns {error.ProstEncodeError} ProstEncodeError instance
         */
        ProstEncodeError.create = function create(properties) {
            return new ProstEncodeError(properties);
        };

        /**
         * Encodes the specified ProstEncodeError message. Does not implicitly {@link error.ProstEncodeError.verify|verify} messages.
         * @function encode
         * @memberof error.ProstEncodeError
         * @static
         * @param {error.IProstEncodeError} message ProstEncodeError message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProstEncodeError.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ProstEncodeError message, length delimited. Does not implicitly {@link error.ProstEncodeError.verify|verify} messages.
         * @function encodeDelimited
         * @memberof error.ProstEncodeError
         * @static
         * @param {error.IProstEncodeError} message ProstEncodeError message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProstEncodeError.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ProstEncodeError message from the specified reader or buffer.
         * @function decode
         * @memberof error.ProstEncodeError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {error.ProstEncodeError} ProstEncodeError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProstEncodeError.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.error.ProstEncodeError();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ProstEncodeError message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof error.ProstEncodeError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {error.ProstEncodeError} ProstEncodeError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProstEncodeError.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ProstEncodeError message.
         * @function verify
         * @memberof error.ProstEncodeError
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ProstEncodeError.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a ProstEncodeError message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof error.ProstEncodeError
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {error.ProstEncodeError} ProstEncodeError
         */
        ProstEncodeError.fromObject = function fromObject(object) {
            if (object instanceof $root.error.ProstEncodeError)
                return object;
            return new $root.error.ProstEncodeError();
        };

        /**
         * Creates a plain object from a ProstEncodeError message. Also converts values to other types if specified.
         * @function toObject
         * @memberof error.ProstEncodeError
         * @static
         * @param {error.ProstEncodeError} message ProstEncodeError
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProstEncodeError.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ProstEncodeError to JSON.
         * @function toJSON
         * @memberof error.ProstEncodeError
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProstEncodeError.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ProstEncodeError
         * @function getTypeUrl
         * @memberof error.ProstEncodeError
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ProstEncodeError.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/error.ProstEncodeError";
        };

        return ProstEncodeError;
    })();

    error.ExecuteError = (function() {

        /**
         * Properties of an ExecuteError.
         * @memberof error
         * @interface IExecuteError
         * @property {string|null} [errorMessage] ExecuteError errorMessage
         */

        /**
         * Constructs a new ExecuteError.
         * @memberof error
         * @classdesc Represents an ExecuteError.
         * @implements IExecuteError
         * @constructor
         * @param {error.IExecuteError=} [properties] Properties to set
         */
        function ExecuteError(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ExecuteError errorMessage.
         * @member {string} errorMessage
         * @memberof error.ExecuteError
         * @instance
         */
        ExecuteError.prototype.errorMessage = "";

        /**
         * Creates a new ExecuteError instance using the specified properties.
         * @function create
         * @memberof error.ExecuteError
         * @static
         * @param {error.IExecuteError=} [properties] Properties to set
         * @returns {error.ExecuteError} ExecuteError instance
         */
        ExecuteError.create = function create(properties) {
            return new ExecuteError(properties);
        };

        /**
         * Encodes the specified ExecuteError message. Does not implicitly {@link error.ExecuteError.verify|verify} messages.
         * @function encode
         * @memberof error.ExecuteError
         * @static
         * @param {error.IExecuteError} message ExecuteError message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExecuteError.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errorMessage != null && Object.hasOwnProperty.call(message, "errorMessage"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.errorMessage);
            return writer;
        };

        /**
         * Encodes the specified ExecuteError message, length delimited. Does not implicitly {@link error.ExecuteError.verify|verify} messages.
         * @function encodeDelimited
         * @memberof error.ExecuteError
         * @static
         * @param {error.IExecuteError} message ExecuteError message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExecuteError.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ExecuteError message from the specified reader or buffer.
         * @function decode
         * @memberof error.ExecuteError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {error.ExecuteError} ExecuteError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExecuteError.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.error.ExecuteError();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.errorMessage = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ExecuteError message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof error.ExecuteError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {error.ExecuteError} ExecuteError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExecuteError.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ExecuteError message.
         * @function verify
         * @memberof error.ExecuteError
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ExecuteError.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                if (!$util.isString(message.errorMessage))
                    return "errorMessage: string expected";
            return null;
        };

        /**
         * Creates an ExecuteError message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof error.ExecuteError
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {error.ExecuteError} ExecuteError
         */
        ExecuteError.fromObject = function fromObject(object) {
            if (object instanceof $root.error.ExecuteError)
                return object;
            let message = new $root.error.ExecuteError();
            if (object.errorMessage != null)
                message.errorMessage = String(object.errorMessage);
            return message;
        };

        /**
         * Creates a plain object from an ExecuteError message. Also converts values to other types if specified.
         * @function toObject
         * @memberof error.ExecuteError
         * @static
         * @param {error.ExecuteError} message ExecuteError
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ExecuteError.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.errorMessage = "";
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                object.errorMessage = message.errorMessage;
            return object;
        };

        /**
         * Converts this ExecuteError to JSON.
         * @function toJSON
         * @memberof error.ExecuteError
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ExecuteError.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ExecuteError
         * @function getTypeUrl
         * @memberof error.ExecuteError
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ExecuteError.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/error.ExecuteError";
        };

        return ExecuteError;
    })();

    error.MalformatRpcPacket = (function() {

        /**
         * Properties of a MalformatRpcPacket.
         * @memberof error
         * @interface IMalformatRpcPacket
         * @property {string|null} [errorMessage] MalformatRpcPacket errorMessage
         */

        /**
         * Constructs a new MalformatRpcPacket.
         * @memberof error
         * @classdesc Represents a MalformatRpcPacket.
         * @implements IMalformatRpcPacket
         * @constructor
         * @param {error.IMalformatRpcPacket=} [properties] Properties to set
         */
        function MalformatRpcPacket(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MalformatRpcPacket errorMessage.
         * @member {string} errorMessage
         * @memberof error.MalformatRpcPacket
         * @instance
         */
        MalformatRpcPacket.prototype.errorMessage = "";

        /**
         * Creates a new MalformatRpcPacket instance using the specified properties.
         * @function create
         * @memberof error.MalformatRpcPacket
         * @static
         * @param {error.IMalformatRpcPacket=} [properties] Properties to set
         * @returns {error.MalformatRpcPacket} MalformatRpcPacket instance
         */
        MalformatRpcPacket.create = function create(properties) {
            return new MalformatRpcPacket(properties);
        };

        /**
         * Encodes the specified MalformatRpcPacket message. Does not implicitly {@link error.MalformatRpcPacket.verify|verify} messages.
         * @function encode
         * @memberof error.MalformatRpcPacket
         * @static
         * @param {error.IMalformatRpcPacket} message MalformatRpcPacket message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MalformatRpcPacket.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errorMessage != null && Object.hasOwnProperty.call(message, "errorMessage"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.errorMessage);
            return writer;
        };

        /**
         * Encodes the specified MalformatRpcPacket message, length delimited. Does not implicitly {@link error.MalformatRpcPacket.verify|verify} messages.
         * @function encodeDelimited
         * @memberof error.MalformatRpcPacket
         * @static
         * @param {error.IMalformatRpcPacket} message MalformatRpcPacket message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MalformatRpcPacket.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MalformatRpcPacket message from the specified reader or buffer.
         * @function decode
         * @memberof error.MalformatRpcPacket
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {error.MalformatRpcPacket} MalformatRpcPacket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MalformatRpcPacket.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.error.MalformatRpcPacket();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.errorMessage = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MalformatRpcPacket message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof error.MalformatRpcPacket
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {error.MalformatRpcPacket} MalformatRpcPacket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MalformatRpcPacket.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MalformatRpcPacket message.
         * @function verify
         * @memberof error.MalformatRpcPacket
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MalformatRpcPacket.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                if (!$util.isString(message.errorMessage))
                    return "errorMessage: string expected";
            return null;
        };

        /**
         * Creates a MalformatRpcPacket message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof error.MalformatRpcPacket
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {error.MalformatRpcPacket} MalformatRpcPacket
         */
        MalformatRpcPacket.fromObject = function fromObject(object) {
            if (object instanceof $root.error.MalformatRpcPacket)
                return object;
            let message = new $root.error.MalformatRpcPacket();
            if (object.errorMessage != null)
                message.errorMessage = String(object.errorMessage);
            return message;
        };

        /**
         * Creates a plain object from a MalformatRpcPacket message. Also converts values to other types if specified.
         * @function toObject
         * @memberof error.MalformatRpcPacket
         * @static
         * @param {error.MalformatRpcPacket} message MalformatRpcPacket
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MalformatRpcPacket.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.errorMessage = "";
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                object.errorMessage = message.errorMessage;
            return object;
        };

        /**
         * Converts this MalformatRpcPacket to JSON.
         * @function toJSON
         * @memberof error.MalformatRpcPacket
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MalformatRpcPacket.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MalformatRpcPacket
         * @function getTypeUrl
         * @memberof error.MalformatRpcPacket
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MalformatRpcPacket.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/error.MalformatRpcPacket";
        };

        return MalformatRpcPacket;
    })();

    error.Timeout = (function() {

        /**
         * Properties of a Timeout.
         * @memberof error
         * @interface ITimeout
         * @property {string|null} [errorMessage] Timeout errorMessage
         */

        /**
         * Constructs a new Timeout.
         * @memberof error
         * @classdesc Represents a Timeout.
         * @implements ITimeout
         * @constructor
         * @param {error.ITimeout=} [properties] Properties to set
         */
        function Timeout(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Timeout errorMessage.
         * @member {string} errorMessage
         * @memberof error.Timeout
         * @instance
         */
        Timeout.prototype.errorMessage = "";

        /**
         * Creates a new Timeout instance using the specified properties.
         * @function create
         * @memberof error.Timeout
         * @static
         * @param {error.ITimeout=} [properties] Properties to set
         * @returns {error.Timeout} Timeout instance
         */
        Timeout.create = function create(properties) {
            return new Timeout(properties);
        };

        /**
         * Encodes the specified Timeout message. Does not implicitly {@link error.Timeout.verify|verify} messages.
         * @function encode
         * @memberof error.Timeout
         * @static
         * @param {error.ITimeout} message Timeout message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Timeout.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errorMessage != null && Object.hasOwnProperty.call(message, "errorMessage"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.errorMessage);
            return writer;
        };

        /**
         * Encodes the specified Timeout message, length delimited. Does not implicitly {@link error.Timeout.verify|verify} messages.
         * @function encodeDelimited
         * @memberof error.Timeout
         * @static
         * @param {error.ITimeout} message Timeout message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Timeout.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Timeout message from the specified reader or buffer.
         * @function decode
         * @memberof error.Timeout
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {error.Timeout} Timeout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Timeout.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.error.Timeout();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.errorMessage = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Timeout message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof error.Timeout
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {error.Timeout} Timeout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Timeout.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Timeout message.
         * @function verify
         * @memberof error.Timeout
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Timeout.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                if (!$util.isString(message.errorMessage))
                    return "errorMessage: string expected";
            return null;
        };

        /**
         * Creates a Timeout message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof error.Timeout
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {error.Timeout} Timeout
         */
        Timeout.fromObject = function fromObject(object) {
            if (object instanceof $root.error.Timeout)
                return object;
            let message = new $root.error.Timeout();
            if (object.errorMessage != null)
                message.errorMessage = String(object.errorMessage);
            return message;
        };

        /**
         * Creates a plain object from a Timeout message. Also converts values to other types if specified.
         * @function toObject
         * @memberof error.Timeout
         * @static
         * @param {error.Timeout} message Timeout
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Timeout.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.errorMessage = "";
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                object.errorMessage = message.errorMessage;
            return object;
        };

        /**
         * Converts this Timeout to JSON.
         * @function toJSON
         * @memberof error.Timeout
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Timeout.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Timeout
         * @function getTypeUrl
         * @memberof error.Timeout
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Timeout.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/error.Timeout";
        };

        return Timeout;
    })();

    error.Error = (function() {

        /**
         * Properties of an Error.
         * @memberof error
         * @interface IError
         * @property {error.IOtherError|null} [otherError] Error otherError
         * @property {error.IInvalidMethodIndex|null} [invalidMethodIndex] Error invalidMethodIndex
         * @property {error.IInvalidService|null} [invalidService] Error invalidService
         * @property {error.IProstDecodeError|null} [prostDecodeError] Error prostDecodeError
         * @property {error.IProstEncodeError|null} [prostEncodeError] Error prostEncodeError
         * @property {error.IExecuteError|null} [executeError] Error executeError
         * @property {error.IMalformatRpcPacket|null} [malformatRpcPacket] Error malformatRpcPacket
         * @property {error.ITimeout|null} [timeout] Error timeout
         */

        /**
         * Constructs a new Error.
         * @memberof error
         * @classdesc Represents an Error.
         * @implements IError
         * @constructor
         * @param {error.IError=} [properties] Properties to set
         */
        function Error(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Error otherError.
         * @member {error.IOtherError|null|undefined} otherError
         * @memberof error.Error
         * @instance
         */
        Error.prototype.otherError = null;

        /**
         * Error invalidMethodIndex.
         * @member {error.IInvalidMethodIndex|null|undefined} invalidMethodIndex
         * @memberof error.Error
         * @instance
         */
        Error.prototype.invalidMethodIndex = null;

        /**
         * Error invalidService.
         * @member {error.IInvalidService|null|undefined} invalidService
         * @memberof error.Error
         * @instance
         */
        Error.prototype.invalidService = null;

        /**
         * Error prostDecodeError.
         * @member {error.IProstDecodeError|null|undefined} prostDecodeError
         * @memberof error.Error
         * @instance
         */
        Error.prototype.prostDecodeError = null;

        /**
         * Error prostEncodeError.
         * @member {error.IProstEncodeError|null|undefined} prostEncodeError
         * @memberof error.Error
         * @instance
         */
        Error.prototype.prostEncodeError = null;

        /**
         * Error executeError.
         * @member {error.IExecuteError|null|undefined} executeError
         * @memberof error.Error
         * @instance
         */
        Error.prototype.executeError = null;

        /**
         * Error malformatRpcPacket.
         * @member {error.IMalformatRpcPacket|null|undefined} malformatRpcPacket
         * @memberof error.Error
         * @instance
         */
        Error.prototype.malformatRpcPacket = null;

        /**
         * Error timeout.
         * @member {error.ITimeout|null|undefined} timeout
         * @memberof error.Error
         * @instance
         */
        Error.prototype.timeout = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * Error errorKind.
         * @member {"otherError"|"invalidMethodIndex"|"invalidService"|"prostDecodeError"|"prostEncodeError"|"executeError"|"malformatRpcPacket"|"timeout"|undefined} errorKind
         * @memberof error.Error
         * @instance
         */
        Object.defineProperty(Error.prototype, "errorKind", {
            get: $util.oneOfGetter($oneOfFields = ["otherError", "invalidMethodIndex", "invalidService", "prostDecodeError", "prostEncodeError", "executeError", "malformatRpcPacket", "timeout"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Error instance using the specified properties.
         * @function create
         * @memberof error.Error
         * @static
         * @param {error.IError=} [properties] Properties to set
         * @returns {error.Error} Error instance
         */
        Error.create = function create(properties) {
            return new Error(properties);
        };

        /**
         * Encodes the specified Error message. Does not implicitly {@link error.Error.verify|verify} messages.
         * @function encode
         * @memberof error.Error
         * @static
         * @param {error.IError} message Error message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Error.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.otherError != null && Object.hasOwnProperty.call(message, "otherError"))
                $root.error.OtherError.encode(message.otherError, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.invalidMethodIndex != null && Object.hasOwnProperty.call(message, "invalidMethodIndex"))
                $root.error.InvalidMethodIndex.encode(message.invalidMethodIndex, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.invalidService != null && Object.hasOwnProperty.call(message, "invalidService"))
                $root.error.InvalidService.encode(message.invalidService, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.prostDecodeError != null && Object.hasOwnProperty.call(message, "prostDecodeError"))
                $root.error.ProstDecodeError.encode(message.prostDecodeError, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.prostEncodeError != null && Object.hasOwnProperty.call(message, "prostEncodeError"))
                $root.error.ProstEncodeError.encode(message.prostEncodeError, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.executeError != null && Object.hasOwnProperty.call(message, "executeError"))
                $root.error.ExecuteError.encode(message.executeError, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.malformatRpcPacket != null && Object.hasOwnProperty.call(message, "malformatRpcPacket"))
                $root.error.MalformatRpcPacket.encode(message.malformatRpcPacket, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.timeout != null && Object.hasOwnProperty.call(message, "timeout"))
                $root.error.Timeout.encode(message.timeout, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Error message, length delimited. Does not implicitly {@link error.Error.verify|verify} messages.
         * @function encodeDelimited
         * @memberof error.Error
         * @static
         * @param {error.IError} message Error message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Error.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Error message from the specified reader or buffer.
         * @function decode
         * @memberof error.Error
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {error.Error} Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Error.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.error.Error();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.otherError = $root.error.OtherError.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.invalidMethodIndex = $root.error.InvalidMethodIndex.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.invalidService = $root.error.InvalidService.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.prostDecodeError = $root.error.ProstDecodeError.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.prostEncodeError = $root.error.ProstEncodeError.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.executeError = $root.error.ExecuteError.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.malformatRpcPacket = $root.error.MalformatRpcPacket.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message.timeout = $root.error.Timeout.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Error message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof error.Error
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {error.Error} Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Error.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Error message.
         * @function verify
         * @memberof error.Error
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Error.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.otherError != null && message.hasOwnProperty("otherError")) {
                properties.errorKind = 1;
                {
                    let error = $root.error.OtherError.verify(message.otherError);
                    if (error)
                        return "otherError." + error;
                }
            }
            if (message.invalidMethodIndex != null && message.hasOwnProperty("invalidMethodIndex")) {
                if (properties.errorKind === 1)
                    return "errorKind: multiple values";
                properties.errorKind = 1;
                {
                    let error = $root.error.InvalidMethodIndex.verify(message.invalidMethodIndex);
                    if (error)
                        return "invalidMethodIndex." + error;
                }
            }
            if (message.invalidService != null && message.hasOwnProperty("invalidService")) {
                if (properties.errorKind === 1)
                    return "errorKind: multiple values";
                properties.errorKind = 1;
                {
                    let error = $root.error.InvalidService.verify(message.invalidService);
                    if (error)
                        return "invalidService." + error;
                }
            }
            if (message.prostDecodeError != null && message.hasOwnProperty("prostDecodeError")) {
                if (properties.errorKind === 1)
                    return "errorKind: multiple values";
                properties.errorKind = 1;
                {
                    let error = $root.error.ProstDecodeError.verify(message.prostDecodeError);
                    if (error)
                        return "prostDecodeError." + error;
                }
            }
            if (message.prostEncodeError != null && message.hasOwnProperty("prostEncodeError")) {
                if (properties.errorKind === 1)
                    return "errorKind: multiple values";
                properties.errorKind = 1;
                {
                    let error = $root.error.ProstEncodeError.verify(message.prostEncodeError);
                    if (error)
                        return "prostEncodeError." + error;
                }
            }
            if (message.executeError != null && message.hasOwnProperty("executeError")) {
                if (properties.errorKind === 1)
                    return "errorKind: multiple values";
                properties.errorKind = 1;
                {
                    let error = $root.error.ExecuteError.verify(message.executeError);
                    if (error)
                        return "executeError." + error;
                }
            }
            if (message.malformatRpcPacket != null && message.hasOwnProperty("malformatRpcPacket")) {
                if (properties.errorKind === 1)
                    return "errorKind: multiple values";
                properties.errorKind = 1;
                {
                    let error = $root.error.MalformatRpcPacket.verify(message.malformatRpcPacket);
                    if (error)
                        return "malformatRpcPacket." + error;
                }
            }
            if (message.timeout != null && message.hasOwnProperty("timeout")) {
                if (properties.errorKind === 1)
                    return "errorKind: multiple values";
                properties.errorKind = 1;
                {
                    let error = $root.error.Timeout.verify(message.timeout);
                    if (error)
                        return "timeout." + error;
                }
            }
            return null;
        };

        /**
         * Creates an Error message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof error.Error
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {error.Error} Error
         */
        Error.fromObject = function fromObject(object) {
            if (object instanceof $root.error.Error)
                return object;
            let message = new $root.error.Error();
            if (object.otherError != null) {
                if (typeof object.otherError !== "object")
                    throw TypeError(".error.Error.otherError: object expected");
                message.otherError = $root.error.OtherError.fromObject(object.otherError);
            }
            if (object.invalidMethodIndex != null) {
                if (typeof object.invalidMethodIndex !== "object")
                    throw TypeError(".error.Error.invalidMethodIndex: object expected");
                message.invalidMethodIndex = $root.error.InvalidMethodIndex.fromObject(object.invalidMethodIndex);
            }
            if (object.invalidService != null) {
                if (typeof object.invalidService !== "object")
                    throw TypeError(".error.Error.invalidService: object expected");
                message.invalidService = $root.error.InvalidService.fromObject(object.invalidService);
            }
            if (object.prostDecodeError != null) {
                if (typeof object.prostDecodeError !== "object")
                    throw TypeError(".error.Error.prostDecodeError: object expected");
                message.prostDecodeError = $root.error.ProstDecodeError.fromObject(object.prostDecodeError);
            }
            if (object.prostEncodeError != null) {
                if (typeof object.prostEncodeError !== "object")
                    throw TypeError(".error.Error.prostEncodeError: object expected");
                message.prostEncodeError = $root.error.ProstEncodeError.fromObject(object.prostEncodeError);
            }
            if (object.executeError != null) {
                if (typeof object.executeError !== "object")
                    throw TypeError(".error.Error.executeError: object expected");
                message.executeError = $root.error.ExecuteError.fromObject(object.executeError);
            }
            if (object.malformatRpcPacket != null) {
                if (typeof object.malformatRpcPacket !== "object")
                    throw TypeError(".error.Error.malformatRpcPacket: object expected");
                message.malformatRpcPacket = $root.error.MalformatRpcPacket.fromObject(object.malformatRpcPacket);
            }
            if (object.timeout != null) {
                if (typeof object.timeout !== "object")
                    throw TypeError(".error.Error.timeout: object expected");
                message.timeout = $root.error.Timeout.fromObject(object.timeout);
            }
            return message;
        };

        /**
         * Creates a plain object from an Error message. Also converts values to other types if specified.
         * @function toObject
         * @memberof error.Error
         * @static
         * @param {error.Error} message Error
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Error.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.otherError != null && message.hasOwnProperty("otherError")) {
                object.otherError = $root.error.OtherError.toObject(message.otherError, options);
                if (options.oneofs)
                    object.errorKind = "otherError";
            }
            if (message.invalidMethodIndex != null && message.hasOwnProperty("invalidMethodIndex")) {
                object.invalidMethodIndex = $root.error.InvalidMethodIndex.toObject(message.invalidMethodIndex, options);
                if (options.oneofs)
                    object.errorKind = "invalidMethodIndex";
            }
            if (message.invalidService != null && message.hasOwnProperty("invalidService")) {
                object.invalidService = $root.error.InvalidService.toObject(message.invalidService, options);
                if (options.oneofs)
                    object.errorKind = "invalidService";
            }
            if (message.prostDecodeError != null && message.hasOwnProperty("prostDecodeError")) {
                object.prostDecodeError = $root.error.ProstDecodeError.toObject(message.prostDecodeError, options);
                if (options.oneofs)
                    object.errorKind = "prostDecodeError";
            }
            if (message.prostEncodeError != null && message.hasOwnProperty("prostEncodeError")) {
                object.prostEncodeError = $root.error.ProstEncodeError.toObject(message.prostEncodeError, options);
                if (options.oneofs)
                    object.errorKind = "prostEncodeError";
            }
            if (message.executeError != null && message.hasOwnProperty("executeError")) {
                object.executeError = $root.error.ExecuteError.toObject(message.executeError, options);
                if (options.oneofs)
                    object.errorKind = "executeError";
            }
            if (message.malformatRpcPacket != null && message.hasOwnProperty("malformatRpcPacket")) {
                object.malformatRpcPacket = $root.error.MalformatRpcPacket.toObject(message.malformatRpcPacket, options);
                if (options.oneofs)
                    object.errorKind = "malformatRpcPacket";
            }
            if (message.timeout != null && message.hasOwnProperty("timeout")) {
                object.timeout = $root.error.Timeout.toObject(message.timeout, options);
                if (options.oneofs)
                    object.errorKind = "timeout";
            }
            return object;
        };

        /**
         * Converts this Error to JSON.
         * @function toJSON
         * @memberof error.Error
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Error.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Error
         * @function getTypeUrl
         * @memberof error.Error
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Error.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/error.Error";
        };

        return Error;
    })();

    return error;
})();

export const common = $root.common = (() => {

    /**
     * Namespace common.
     * @exports common
     * @namespace
     */
    const common = {};

    common.FlagsInConfig = (function() {

        /**
         * Properties of a FlagsInConfig.
         * @memberof common
         * @interface IFlagsInConfig
         * @property {string|null} [defaultProtocol] FlagsInConfig defaultProtocol
         * @property {string|null} [devName] FlagsInConfig devName
         * @property {boolean|null} [enableEncryption] FlagsInConfig enableEncryption
         * @property {boolean|null} [enableIpv6] FlagsInConfig enableIpv6
         * @property {number|null} [mtu] FlagsInConfig mtu
         * @property {boolean|null} [latencyFirst] FlagsInConfig latencyFirst
         * @property {boolean|null} [enableExitNode] FlagsInConfig enableExitNode
         * @property {boolean|null} [noTun] FlagsInConfig noTun
         * @property {boolean|null} [useSmoltcp] FlagsInConfig useSmoltcp
         * @property {string|null} [relayNetworkWhitelist] FlagsInConfig relayNetworkWhitelist
         * @property {boolean|null} [disableP2p] FlagsInConfig disableP2p
         * @property {boolean|null} [relayAllPeerRpc] FlagsInConfig relayAllPeerRpc
         * @property {boolean|null} [disableUdpHolePunching] FlagsInConfig disableUdpHolePunching
         * @property {boolean|null} [multiThread] FlagsInConfig multiThread
         * @property {common.CompressionAlgoPb|null} [dataCompressAlgo] FlagsInConfig dataCompressAlgo
         * @property {boolean|null} [bindDevice] FlagsInConfig bindDevice
         * @property {boolean|null} [enableKcpProxy] FlagsInConfig enableKcpProxy
         * @property {boolean|null} [disableKcpInput] FlagsInConfig disableKcpInput
         * @property {boolean|null} [disableRelayKcp] FlagsInConfig disableRelayKcp
         * @property {boolean|null} [proxyForwardBySystem] FlagsInConfig proxyForwardBySystem
         * @property {boolean|null} [acceptDns] FlagsInConfig acceptDns
         * @property {boolean|null} [privateMode] FlagsInConfig privateMode
         * @property {boolean|null} [enableQuicProxy] FlagsInConfig enableQuicProxy
         * @property {boolean|null} [disableQuicInput] FlagsInConfig disableQuicInput
         * @property {number|null} [quicListenPort] FlagsInConfig quicListenPort
         * @property {number|Long|null} [foreignRelayBpsLimit] FlagsInConfig foreignRelayBpsLimit
         * @property {number|null} [multiThreadCount] FlagsInConfig multiThreadCount
         * @property {boolean|null} [enableRelayForeignNetworkKcp] FlagsInConfig enableRelayForeignNetworkKcp
         * @property {string|null} [encryptionAlgorithm] FlagsInConfig encryptionAlgorithm
         * @property {boolean|null} [disableSymHolePunching] FlagsInConfig disableSymHolePunching
         * @property {string|null} [tldDnsZone] FlagsInConfig tldDnsZone
         */

        /**
         * Constructs a new FlagsInConfig.
         * @memberof common
         * @classdesc Represents a FlagsInConfig.
         * @implements IFlagsInConfig
         * @constructor
         * @param {common.IFlagsInConfig=} [properties] Properties to set
         */
        function FlagsInConfig(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FlagsInConfig defaultProtocol.
         * @member {string} defaultProtocol
         * @memberof common.FlagsInConfig
         * @instance
         */
        FlagsInConfig.prototype.defaultProtocol = "";

        /**
         * FlagsInConfig devName.
         * @member {string} devName
         * @memberof common.FlagsInConfig
         * @instance
         */
        FlagsInConfig.prototype.devName = "";

        /**
         * FlagsInConfig enableEncryption.
         * @member {boolean} enableEncryption
         * @memberof common.FlagsInConfig
         * @instance
         */
        FlagsInConfig.prototype.enableEncryption = false;

        /**
         * FlagsInConfig enableIpv6.
         * @member {boolean} enableIpv6
         * @memberof common.FlagsInConfig
         * @instance
         */
        FlagsInConfig.prototype.enableIpv6 = false;

        /**
         * FlagsInConfig mtu.
         * @member {number} mtu
         * @memberof common.FlagsInConfig
         * @instance
         */
        FlagsInConfig.prototype.mtu = 0;

        /**
         * FlagsInConfig latencyFirst.
         * @member {boolean} latencyFirst
         * @memberof common.FlagsInConfig
         * @instance
         */
        FlagsInConfig.prototype.latencyFirst = false;

        /**
         * FlagsInConfig enableExitNode.
         * @member {boolean} enableExitNode
         * @memberof common.FlagsInConfig
         * @instance
         */
        FlagsInConfig.prototype.enableExitNode = false;

        /**
         * FlagsInConfig noTun.
         * @member {boolean} noTun
         * @memberof common.FlagsInConfig
         * @instance
         */
        FlagsInConfig.prototype.noTun = false;

        /**
         * FlagsInConfig useSmoltcp.
         * @member {boolean} useSmoltcp
         * @memberof common.FlagsInConfig
         * @instance
         */
        FlagsInConfig.prototype.useSmoltcp = false;

        /**
         * FlagsInConfig relayNetworkWhitelist.
         * @member {string} relayNetworkWhitelist
         * @memberof common.FlagsInConfig
         * @instance
         */
        FlagsInConfig.prototype.relayNetworkWhitelist = "";

        /**
         * FlagsInConfig disableP2p.
         * @member {boolean} disableP2p
         * @memberof common.FlagsInConfig
         * @instance
         */
        FlagsInConfig.prototype.disableP2p = false;

        /**
         * FlagsInConfig relayAllPeerRpc.
         * @member {boolean} relayAllPeerRpc
         * @memberof common.FlagsInConfig
         * @instance
         */
        FlagsInConfig.prototype.relayAllPeerRpc = false;

        /**
         * FlagsInConfig disableUdpHolePunching.
         * @member {boolean} disableUdpHolePunching
         * @memberof common.FlagsInConfig
         * @instance
         */
        FlagsInConfig.prototype.disableUdpHolePunching = false;

        /**
         * FlagsInConfig multiThread.
         * @member {boolean} multiThread
         * @memberof common.FlagsInConfig
         * @instance
         */
        FlagsInConfig.prototype.multiThread = false;

        /**
         * FlagsInConfig dataCompressAlgo.
         * @member {common.CompressionAlgoPb} dataCompressAlgo
         * @memberof common.FlagsInConfig
         * @instance
         */
        FlagsInConfig.prototype.dataCompressAlgo = 0;

        /**
         * FlagsInConfig bindDevice.
         * @member {boolean} bindDevice
         * @memberof common.FlagsInConfig
         * @instance
         */
        FlagsInConfig.prototype.bindDevice = false;

        /**
         * FlagsInConfig enableKcpProxy.
         * @member {boolean} enableKcpProxy
         * @memberof common.FlagsInConfig
         * @instance
         */
        FlagsInConfig.prototype.enableKcpProxy = false;

        /**
         * FlagsInConfig disableKcpInput.
         * @member {boolean} disableKcpInput
         * @memberof common.FlagsInConfig
         * @instance
         */
        FlagsInConfig.prototype.disableKcpInput = false;

        /**
         * FlagsInConfig disableRelayKcp.
         * @member {boolean} disableRelayKcp
         * @memberof common.FlagsInConfig
         * @instance
         */
        FlagsInConfig.prototype.disableRelayKcp = false;

        /**
         * FlagsInConfig proxyForwardBySystem.
         * @member {boolean} proxyForwardBySystem
         * @memberof common.FlagsInConfig
         * @instance
         */
        FlagsInConfig.prototype.proxyForwardBySystem = false;

        /**
         * FlagsInConfig acceptDns.
         * @member {boolean} acceptDns
         * @memberof common.FlagsInConfig
         * @instance
         */
        FlagsInConfig.prototype.acceptDns = false;

        /**
         * FlagsInConfig privateMode.
         * @member {boolean} privateMode
         * @memberof common.FlagsInConfig
         * @instance
         */
        FlagsInConfig.prototype.privateMode = false;

        /**
         * FlagsInConfig enableQuicProxy.
         * @member {boolean} enableQuicProxy
         * @memberof common.FlagsInConfig
         * @instance
         */
        FlagsInConfig.prototype.enableQuicProxy = false;

        /**
         * FlagsInConfig disableQuicInput.
         * @member {boolean} disableQuicInput
         * @memberof common.FlagsInConfig
         * @instance
         */
        FlagsInConfig.prototype.disableQuicInput = false;

        /**
         * FlagsInConfig quicListenPort.
         * @member {number} quicListenPort
         * @memberof common.FlagsInConfig
         * @instance
         */
        FlagsInConfig.prototype.quicListenPort = 0;

        /**
         * FlagsInConfig foreignRelayBpsLimit.
         * @member {number|Long} foreignRelayBpsLimit
         * @memberof common.FlagsInConfig
         * @instance
         */
        FlagsInConfig.prototype.foreignRelayBpsLimit = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * FlagsInConfig multiThreadCount.
         * @member {number} multiThreadCount
         * @memberof common.FlagsInConfig
         * @instance
         */
        FlagsInConfig.prototype.multiThreadCount = 0;

        /**
         * FlagsInConfig enableRelayForeignNetworkKcp.
         * @member {boolean} enableRelayForeignNetworkKcp
         * @memberof common.FlagsInConfig
         * @instance
         */
        FlagsInConfig.prototype.enableRelayForeignNetworkKcp = false;

        /**
         * FlagsInConfig encryptionAlgorithm.
         * @member {string} encryptionAlgorithm
         * @memberof common.FlagsInConfig
         * @instance
         */
        FlagsInConfig.prototype.encryptionAlgorithm = "";

        /**
         * FlagsInConfig disableSymHolePunching.
         * @member {boolean} disableSymHolePunching
         * @memberof common.FlagsInConfig
         * @instance
         */
        FlagsInConfig.prototype.disableSymHolePunching = false;

        /**
         * FlagsInConfig tldDnsZone.
         * @member {string} tldDnsZone
         * @memberof common.FlagsInConfig
         * @instance
         */
        FlagsInConfig.prototype.tldDnsZone = "";

        /**
         * Creates a new FlagsInConfig instance using the specified properties.
         * @function create
         * @memberof common.FlagsInConfig
         * @static
         * @param {common.IFlagsInConfig=} [properties] Properties to set
         * @returns {common.FlagsInConfig} FlagsInConfig instance
         */
        FlagsInConfig.create = function create(properties) {
            return new FlagsInConfig(properties);
        };

        /**
         * Encodes the specified FlagsInConfig message. Does not implicitly {@link common.FlagsInConfig.verify|verify} messages.
         * @function encode
         * @memberof common.FlagsInConfig
         * @static
         * @param {common.IFlagsInConfig} message FlagsInConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FlagsInConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.defaultProtocol != null && Object.hasOwnProperty.call(message, "defaultProtocol"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.defaultProtocol);
            if (message.devName != null && Object.hasOwnProperty.call(message, "devName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.devName);
            if (message.enableEncryption != null && Object.hasOwnProperty.call(message, "enableEncryption"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.enableEncryption);
            if (message.enableIpv6 != null && Object.hasOwnProperty.call(message, "enableIpv6"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.enableIpv6);
            if (message.mtu != null && Object.hasOwnProperty.call(message, "mtu"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.mtu);
            if (message.latencyFirst != null && Object.hasOwnProperty.call(message, "latencyFirst"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.latencyFirst);
            if (message.enableExitNode != null && Object.hasOwnProperty.call(message, "enableExitNode"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.enableExitNode);
            if (message.noTun != null && Object.hasOwnProperty.call(message, "noTun"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.noTun);
            if (message.useSmoltcp != null && Object.hasOwnProperty.call(message, "useSmoltcp"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.useSmoltcp);
            if (message.relayNetworkWhitelist != null && Object.hasOwnProperty.call(message, "relayNetworkWhitelist"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.relayNetworkWhitelist);
            if (message.disableP2p != null && Object.hasOwnProperty.call(message, "disableP2p"))
                writer.uint32(/* id 11, wireType 0 =*/88).bool(message.disableP2p);
            if (message.relayAllPeerRpc != null && Object.hasOwnProperty.call(message, "relayAllPeerRpc"))
                writer.uint32(/* id 12, wireType 0 =*/96).bool(message.relayAllPeerRpc);
            if (message.disableUdpHolePunching != null && Object.hasOwnProperty.call(message, "disableUdpHolePunching"))
                writer.uint32(/* id 13, wireType 0 =*/104).bool(message.disableUdpHolePunching);
            if (message.multiThread != null && Object.hasOwnProperty.call(message, "multiThread"))
                writer.uint32(/* id 15, wireType 0 =*/120).bool(message.multiThread);
            if (message.dataCompressAlgo != null && Object.hasOwnProperty.call(message, "dataCompressAlgo"))
                writer.uint32(/* id 16, wireType 0 =*/128).int32(message.dataCompressAlgo);
            if (message.bindDevice != null && Object.hasOwnProperty.call(message, "bindDevice"))
                writer.uint32(/* id 17, wireType 0 =*/136).bool(message.bindDevice);
            if (message.enableKcpProxy != null && Object.hasOwnProperty.call(message, "enableKcpProxy"))
                writer.uint32(/* id 18, wireType 0 =*/144).bool(message.enableKcpProxy);
            if (message.disableKcpInput != null && Object.hasOwnProperty.call(message, "disableKcpInput"))
                writer.uint32(/* id 19, wireType 0 =*/152).bool(message.disableKcpInput);
            if (message.disableRelayKcp != null && Object.hasOwnProperty.call(message, "disableRelayKcp"))
                writer.uint32(/* id 20, wireType 0 =*/160).bool(message.disableRelayKcp);
            if (message.proxyForwardBySystem != null && Object.hasOwnProperty.call(message, "proxyForwardBySystem"))
                writer.uint32(/* id 21, wireType 0 =*/168).bool(message.proxyForwardBySystem);
            if (message.acceptDns != null && Object.hasOwnProperty.call(message, "acceptDns"))
                writer.uint32(/* id 22, wireType 0 =*/176).bool(message.acceptDns);
            if (message.privateMode != null && Object.hasOwnProperty.call(message, "privateMode"))
                writer.uint32(/* id 23, wireType 0 =*/184).bool(message.privateMode);
            if (message.enableQuicProxy != null && Object.hasOwnProperty.call(message, "enableQuicProxy"))
                writer.uint32(/* id 24, wireType 0 =*/192).bool(message.enableQuicProxy);
            if (message.disableQuicInput != null && Object.hasOwnProperty.call(message, "disableQuicInput"))
                writer.uint32(/* id 25, wireType 0 =*/200).bool(message.disableQuicInput);
            if (message.foreignRelayBpsLimit != null && Object.hasOwnProperty.call(message, "foreignRelayBpsLimit"))
                writer.uint32(/* id 26, wireType 0 =*/208).uint64(message.foreignRelayBpsLimit);
            if (message.multiThreadCount != null && Object.hasOwnProperty.call(message, "multiThreadCount"))
                writer.uint32(/* id 27, wireType 0 =*/216).uint32(message.multiThreadCount);
            if (message.enableRelayForeignNetworkKcp != null && Object.hasOwnProperty.call(message, "enableRelayForeignNetworkKcp"))
                writer.uint32(/* id 28, wireType 0 =*/224).bool(message.enableRelayForeignNetworkKcp);
            if (message.encryptionAlgorithm != null && Object.hasOwnProperty.call(message, "encryptionAlgorithm"))
                writer.uint32(/* id 29, wireType 2 =*/234).string(message.encryptionAlgorithm);
            if (message.disableSymHolePunching != null && Object.hasOwnProperty.call(message, "disableSymHolePunching"))
                writer.uint32(/* id 30, wireType 0 =*/240).bool(message.disableSymHolePunching);
            if (message.tldDnsZone != null && Object.hasOwnProperty.call(message, "tldDnsZone"))
                writer.uint32(/* id 31, wireType 2 =*/250).string(message.tldDnsZone);
            if (message.quicListenPort != null && Object.hasOwnProperty.call(message, "quicListenPort"))
                writer.uint32(/* id 33, wireType 0 =*/264).uint32(message.quicListenPort);
            return writer;
        };

        /**
         * Encodes the specified FlagsInConfig message, length delimited. Does not implicitly {@link common.FlagsInConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.FlagsInConfig
         * @static
         * @param {common.IFlagsInConfig} message FlagsInConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FlagsInConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FlagsInConfig message from the specified reader or buffer.
         * @function decode
         * @memberof common.FlagsInConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.FlagsInConfig} FlagsInConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FlagsInConfig.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.FlagsInConfig();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.defaultProtocol = reader.string();
                        break;
                    }
                case 2: {
                        message.devName = reader.string();
                        break;
                    }
                case 3: {
                        message.enableEncryption = reader.bool();
                        break;
                    }
                case 4: {
                        message.enableIpv6 = reader.bool();
                        break;
                    }
                case 5: {
                        message.mtu = reader.uint32();
                        break;
                    }
                case 6: {
                        message.latencyFirst = reader.bool();
                        break;
                    }
                case 7: {
                        message.enableExitNode = reader.bool();
                        break;
                    }
                case 8: {
                        message.noTun = reader.bool();
                        break;
                    }
                case 9: {
                        message.useSmoltcp = reader.bool();
                        break;
                    }
                case 10: {
                        message.relayNetworkWhitelist = reader.string();
                        break;
                    }
                case 11: {
                        message.disableP2p = reader.bool();
                        break;
                    }
                case 12: {
                        message.relayAllPeerRpc = reader.bool();
                        break;
                    }
                case 13: {
                        message.disableUdpHolePunching = reader.bool();
                        break;
                    }
                case 15: {
                        message.multiThread = reader.bool();
                        break;
                    }
                case 16: {
                        message.dataCompressAlgo = reader.int32();
                        break;
                    }
                case 17: {
                        message.bindDevice = reader.bool();
                        break;
                    }
                case 18: {
                        message.enableKcpProxy = reader.bool();
                        break;
                    }
                case 19: {
                        message.disableKcpInput = reader.bool();
                        break;
                    }
                case 20: {
                        message.disableRelayKcp = reader.bool();
                        break;
                    }
                case 21: {
                        message.proxyForwardBySystem = reader.bool();
                        break;
                    }
                case 22: {
                        message.acceptDns = reader.bool();
                        break;
                    }
                case 23: {
                        message.privateMode = reader.bool();
                        break;
                    }
                case 24: {
                        message.enableQuicProxy = reader.bool();
                        break;
                    }
                case 25: {
                        message.disableQuicInput = reader.bool();
                        break;
                    }
                case 33: {
                        message.quicListenPort = reader.uint32();
                        break;
                    }
                case 26: {
                        message.foreignRelayBpsLimit = reader.uint64();
                        break;
                    }
                case 27: {
                        message.multiThreadCount = reader.uint32();
                        break;
                    }
                case 28: {
                        message.enableRelayForeignNetworkKcp = reader.bool();
                        break;
                    }
                case 29: {
                        message.encryptionAlgorithm = reader.string();
                        break;
                    }
                case 30: {
                        message.disableSymHolePunching = reader.bool();
                        break;
                    }
                case 31: {
                        message.tldDnsZone = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FlagsInConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.FlagsInConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.FlagsInConfig} FlagsInConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FlagsInConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FlagsInConfig message.
         * @function verify
         * @memberof common.FlagsInConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FlagsInConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.defaultProtocol != null && message.hasOwnProperty("defaultProtocol"))
                if (!$util.isString(message.defaultProtocol))
                    return "defaultProtocol: string expected";
            if (message.devName != null && message.hasOwnProperty("devName"))
                if (!$util.isString(message.devName))
                    return "devName: string expected";
            if (message.enableEncryption != null && message.hasOwnProperty("enableEncryption"))
                if (typeof message.enableEncryption !== "boolean")
                    return "enableEncryption: boolean expected";
            if (message.enableIpv6 != null && message.hasOwnProperty("enableIpv6"))
                if (typeof message.enableIpv6 !== "boolean")
                    return "enableIpv6: boolean expected";
            if (message.mtu != null && message.hasOwnProperty("mtu"))
                if (!$util.isInteger(message.mtu))
                    return "mtu: integer expected";
            if (message.latencyFirst != null && message.hasOwnProperty("latencyFirst"))
                if (typeof message.latencyFirst !== "boolean")
                    return "latencyFirst: boolean expected";
            if (message.enableExitNode != null && message.hasOwnProperty("enableExitNode"))
                if (typeof message.enableExitNode !== "boolean")
                    return "enableExitNode: boolean expected";
            if (message.noTun != null && message.hasOwnProperty("noTun"))
                if (typeof message.noTun !== "boolean")
                    return "noTun: boolean expected";
            if (message.useSmoltcp != null && message.hasOwnProperty("useSmoltcp"))
                if (typeof message.useSmoltcp !== "boolean")
                    return "useSmoltcp: boolean expected";
            if (message.relayNetworkWhitelist != null && message.hasOwnProperty("relayNetworkWhitelist"))
                if (!$util.isString(message.relayNetworkWhitelist))
                    return "relayNetworkWhitelist: string expected";
            if (message.disableP2p != null && message.hasOwnProperty("disableP2p"))
                if (typeof message.disableP2p !== "boolean")
                    return "disableP2p: boolean expected";
            if (message.relayAllPeerRpc != null && message.hasOwnProperty("relayAllPeerRpc"))
                if (typeof message.relayAllPeerRpc !== "boolean")
                    return "relayAllPeerRpc: boolean expected";
            if (message.disableUdpHolePunching != null && message.hasOwnProperty("disableUdpHolePunching"))
                if (typeof message.disableUdpHolePunching !== "boolean")
                    return "disableUdpHolePunching: boolean expected";
            if (message.multiThread != null && message.hasOwnProperty("multiThread"))
                if (typeof message.multiThread !== "boolean")
                    return "multiThread: boolean expected";
            if (message.dataCompressAlgo != null && message.hasOwnProperty("dataCompressAlgo"))
                switch (message.dataCompressAlgo) {
                default:
                    return "dataCompressAlgo: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.bindDevice != null && message.hasOwnProperty("bindDevice"))
                if (typeof message.bindDevice !== "boolean")
                    return "bindDevice: boolean expected";
            if (message.enableKcpProxy != null && message.hasOwnProperty("enableKcpProxy"))
                if (typeof message.enableKcpProxy !== "boolean")
                    return "enableKcpProxy: boolean expected";
            if (message.disableKcpInput != null && message.hasOwnProperty("disableKcpInput"))
                if (typeof message.disableKcpInput !== "boolean")
                    return "disableKcpInput: boolean expected";
            if (message.disableRelayKcp != null && message.hasOwnProperty("disableRelayKcp"))
                if (typeof message.disableRelayKcp !== "boolean")
                    return "disableRelayKcp: boolean expected";
            if (message.proxyForwardBySystem != null && message.hasOwnProperty("proxyForwardBySystem"))
                if (typeof message.proxyForwardBySystem !== "boolean")
                    return "proxyForwardBySystem: boolean expected";
            if (message.acceptDns != null && message.hasOwnProperty("acceptDns"))
                if (typeof message.acceptDns !== "boolean")
                    return "acceptDns: boolean expected";
            if (message.privateMode != null && message.hasOwnProperty("privateMode"))
                if (typeof message.privateMode !== "boolean")
                    return "privateMode: boolean expected";
            if (message.enableQuicProxy != null && message.hasOwnProperty("enableQuicProxy"))
                if (typeof message.enableQuicProxy !== "boolean")
                    return "enableQuicProxy: boolean expected";
            if (message.disableQuicInput != null && message.hasOwnProperty("disableQuicInput"))
                if (typeof message.disableQuicInput !== "boolean")
                    return "disableQuicInput: boolean expected";
            if (message.quicListenPort != null && message.hasOwnProperty("quicListenPort"))
                if (!$util.isInteger(message.quicListenPort))
                    return "quicListenPort: integer expected";
            if (message.foreignRelayBpsLimit != null && message.hasOwnProperty("foreignRelayBpsLimit"))
                if (!$util.isInteger(message.foreignRelayBpsLimit) && !(message.foreignRelayBpsLimit && $util.isInteger(message.foreignRelayBpsLimit.low) && $util.isInteger(message.foreignRelayBpsLimit.high)))
                    return "foreignRelayBpsLimit: integer|Long expected";
            if (message.multiThreadCount != null && message.hasOwnProperty("multiThreadCount"))
                if (!$util.isInteger(message.multiThreadCount))
                    return "multiThreadCount: integer expected";
            if (message.enableRelayForeignNetworkKcp != null && message.hasOwnProperty("enableRelayForeignNetworkKcp"))
                if (typeof message.enableRelayForeignNetworkKcp !== "boolean")
                    return "enableRelayForeignNetworkKcp: boolean expected";
            if (message.encryptionAlgorithm != null && message.hasOwnProperty("encryptionAlgorithm"))
                if (!$util.isString(message.encryptionAlgorithm))
                    return "encryptionAlgorithm: string expected";
            if (message.disableSymHolePunching != null && message.hasOwnProperty("disableSymHolePunching"))
                if (typeof message.disableSymHolePunching !== "boolean")
                    return "disableSymHolePunching: boolean expected";
            if (message.tldDnsZone != null && message.hasOwnProperty("tldDnsZone"))
                if (!$util.isString(message.tldDnsZone))
                    return "tldDnsZone: string expected";
            return null;
        };

        /**
         * Creates a FlagsInConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.FlagsInConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.FlagsInConfig} FlagsInConfig
         */
        FlagsInConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.common.FlagsInConfig)
                return object;
            let message = new $root.common.FlagsInConfig();
            if (object.defaultProtocol != null)
                message.defaultProtocol = String(object.defaultProtocol);
            if (object.devName != null)
                message.devName = String(object.devName);
            if (object.enableEncryption != null)
                message.enableEncryption = Boolean(object.enableEncryption);
            if (object.enableIpv6 != null)
                message.enableIpv6 = Boolean(object.enableIpv6);
            if (object.mtu != null)
                message.mtu = object.mtu >>> 0;
            if (object.latencyFirst != null)
                message.latencyFirst = Boolean(object.latencyFirst);
            if (object.enableExitNode != null)
                message.enableExitNode = Boolean(object.enableExitNode);
            if (object.noTun != null)
                message.noTun = Boolean(object.noTun);
            if (object.useSmoltcp != null)
                message.useSmoltcp = Boolean(object.useSmoltcp);
            if (object.relayNetworkWhitelist != null)
                message.relayNetworkWhitelist = String(object.relayNetworkWhitelist);
            if (object.disableP2p != null)
                message.disableP2p = Boolean(object.disableP2p);
            if (object.relayAllPeerRpc != null)
                message.relayAllPeerRpc = Boolean(object.relayAllPeerRpc);
            if (object.disableUdpHolePunching != null)
                message.disableUdpHolePunching = Boolean(object.disableUdpHolePunching);
            if (object.multiThread != null)
                message.multiThread = Boolean(object.multiThread);
            switch (object.dataCompressAlgo) {
            default:
                if (typeof object.dataCompressAlgo === "number") {
                    message.dataCompressAlgo = object.dataCompressAlgo;
                    break;
                }
                break;
            case "Invalid":
            case 0:
                message.dataCompressAlgo = 0;
                break;
            case "None":
            case 1:
                message.dataCompressAlgo = 1;
                break;
            case "Zstd":
            case 2:
                message.dataCompressAlgo = 2;
                break;
            }
            if (object.bindDevice != null)
                message.bindDevice = Boolean(object.bindDevice);
            if (object.enableKcpProxy != null)
                message.enableKcpProxy = Boolean(object.enableKcpProxy);
            if (object.disableKcpInput != null)
                message.disableKcpInput = Boolean(object.disableKcpInput);
            if (object.disableRelayKcp != null)
                message.disableRelayKcp = Boolean(object.disableRelayKcp);
            if (object.proxyForwardBySystem != null)
                message.proxyForwardBySystem = Boolean(object.proxyForwardBySystem);
            if (object.acceptDns != null)
                message.acceptDns = Boolean(object.acceptDns);
            if (object.privateMode != null)
                message.privateMode = Boolean(object.privateMode);
            if (object.enableQuicProxy != null)
                message.enableQuicProxy = Boolean(object.enableQuicProxy);
            if (object.disableQuicInput != null)
                message.disableQuicInput = Boolean(object.disableQuicInput);
            if (object.quicListenPort != null)
                message.quicListenPort = object.quicListenPort >>> 0;
            if (object.foreignRelayBpsLimit != null)
                if ($util.Long)
                    (message.foreignRelayBpsLimit = $util.Long.fromValue(object.foreignRelayBpsLimit)).unsigned = true;
                else if (typeof object.foreignRelayBpsLimit === "string")
                    message.foreignRelayBpsLimit = parseInt(object.foreignRelayBpsLimit, 10);
                else if (typeof object.foreignRelayBpsLimit === "number")
                    message.foreignRelayBpsLimit = object.foreignRelayBpsLimit;
                else if (typeof object.foreignRelayBpsLimit === "object")
                    message.foreignRelayBpsLimit = new $util.LongBits(object.foreignRelayBpsLimit.low >>> 0, object.foreignRelayBpsLimit.high >>> 0).toNumber(true);
            if (object.multiThreadCount != null)
                message.multiThreadCount = object.multiThreadCount >>> 0;
            if (object.enableRelayForeignNetworkKcp != null)
                message.enableRelayForeignNetworkKcp = Boolean(object.enableRelayForeignNetworkKcp);
            if (object.encryptionAlgorithm != null)
                message.encryptionAlgorithm = String(object.encryptionAlgorithm);
            if (object.disableSymHolePunching != null)
                message.disableSymHolePunching = Boolean(object.disableSymHolePunching);
            if (object.tldDnsZone != null)
                message.tldDnsZone = String(object.tldDnsZone);
            return message;
        };

        /**
         * Creates a plain object from a FlagsInConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.FlagsInConfig
         * @static
         * @param {common.FlagsInConfig} message FlagsInConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FlagsInConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.defaultProtocol = "";
                object.devName = "";
                object.enableEncryption = false;
                object.enableIpv6 = false;
                object.mtu = 0;
                object.latencyFirst = false;
                object.enableExitNode = false;
                object.noTun = false;
                object.useSmoltcp = false;
                object.relayNetworkWhitelist = "";
                object.disableP2p = false;
                object.relayAllPeerRpc = false;
                object.disableUdpHolePunching = false;
                object.multiThread = false;
                object.dataCompressAlgo = options.enums === String ? "Invalid" : 0;
                object.bindDevice = false;
                object.enableKcpProxy = false;
                object.disableKcpInput = false;
                object.disableRelayKcp = false;
                object.proxyForwardBySystem = false;
                object.acceptDns = false;
                object.privateMode = false;
                object.enableQuicProxy = false;
                object.disableQuicInput = false;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.foreignRelayBpsLimit = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.foreignRelayBpsLimit = options.longs === String ? "0" : 0;
                object.multiThreadCount = 0;
                object.enableRelayForeignNetworkKcp = false;
                object.encryptionAlgorithm = "";
                object.disableSymHolePunching = false;
                object.tldDnsZone = "";
                object.quicListenPort = 0;
            }
            if (message.defaultProtocol != null && message.hasOwnProperty("defaultProtocol"))
                object.defaultProtocol = message.defaultProtocol;
            if (message.devName != null && message.hasOwnProperty("devName"))
                object.devName = message.devName;
            if (message.enableEncryption != null && message.hasOwnProperty("enableEncryption"))
                object.enableEncryption = message.enableEncryption;
            if (message.enableIpv6 != null && message.hasOwnProperty("enableIpv6"))
                object.enableIpv6 = message.enableIpv6;
            if (message.mtu != null && message.hasOwnProperty("mtu"))
                object.mtu = message.mtu;
            if (message.latencyFirst != null && message.hasOwnProperty("latencyFirst"))
                object.latencyFirst = message.latencyFirst;
            if (message.enableExitNode != null && message.hasOwnProperty("enableExitNode"))
                object.enableExitNode = message.enableExitNode;
            if (message.noTun != null && message.hasOwnProperty("noTun"))
                object.noTun = message.noTun;
            if (message.useSmoltcp != null && message.hasOwnProperty("useSmoltcp"))
                object.useSmoltcp = message.useSmoltcp;
            if (message.relayNetworkWhitelist != null && message.hasOwnProperty("relayNetworkWhitelist"))
                object.relayNetworkWhitelist = message.relayNetworkWhitelist;
            if (message.disableP2p != null && message.hasOwnProperty("disableP2p"))
                object.disableP2p = message.disableP2p;
            if (message.relayAllPeerRpc != null && message.hasOwnProperty("relayAllPeerRpc"))
                object.relayAllPeerRpc = message.relayAllPeerRpc;
            if (message.disableUdpHolePunching != null && message.hasOwnProperty("disableUdpHolePunching"))
                object.disableUdpHolePunching = message.disableUdpHolePunching;
            if (message.multiThread != null && message.hasOwnProperty("multiThread"))
                object.multiThread = message.multiThread;
            if (message.dataCompressAlgo != null && message.hasOwnProperty("dataCompressAlgo"))
                object.dataCompressAlgo = options.enums === String ? $root.common.CompressionAlgoPb[message.dataCompressAlgo] === undefined ? message.dataCompressAlgo : $root.common.CompressionAlgoPb[message.dataCompressAlgo] : message.dataCompressAlgo;
            if (message.bindDevice != null && message.hasOwnProperty("bindDevice"))
                object.bindDevice = message.bindDevice;
            if (message.enableKcpProxy != null && message.hasOwnProperty("enableKcpProxy"))
                object.enableKcpProxy = message.enableKcpProxy;
            if (message.disableKcpInput != null && message.hasOwnProperty("disableKcpInput"))
                object.disableKcpInput = message.disableKcpInput;
            if (message.disableRelayKcp != null && message.hasOwnProperty("disableRelayKcp"))
                object.disableRelayKcp = message.disableRelayKcp;
            if (message.proxyForwardBySystem != null && message.hasOwnProperty("proxyForwardBySystem"))
                object.proxyForwardBySystem = message.proxyForwardBySystem;
            if (message.acceptDns != null && message.hasOwnProperty("acceptDns"))
                object.acceptDns = message.acceptDns;
            if (message.privateMode != null && message.hasOwnProperty("privateMode"))
                object.privateMode = message.privateMode;
            if (message.enableQuicProxy != null && message.hasOwnProperty("enableQuicProxy"))
                object.enableQuicProxy = message.enableQuicProxy;
            if (message.disableQuicInput != null && message.hasOwnProperty("disableQuicInput"))
                object.disableQuicInput = message.disableQuicInput;
            if (message.foreignRelayBpsLimit != null && message.hasOwnProperty("foreignRelayBpsLimit"))
                if (typeof message.foreignRelayBpsLimit === "number")
                    object.foreignRelayBpsLimit = options.longs === String ? String(message.foreignRelayBpsLimit) : message.foreignRelayBpsLimit;
                else
                    object.foreignRelayBpsLimit = options.longs === String ? $util.Long.prototype.toString.call(message.foreignRelayBpsLimit) : options.longs === Number ? new $util.LongBits(message.foreignRelayBpsLimit.low >>> 0, message.foreignRelayBpsLimit.high >>> 0).toNumber(true) : message.foreignRelayBpsLimit;
            if (message.multiThreadCount != null && message.hasOwnProperty("multiThreadCount"))
                object.multiThreadCount = message.multiThreadCount;
            if (message.enableRelayForeignNetworkKcp != null && message.hasOwnProperty("enableRelayForeignNetworkKcp"))
                object.enableRelayForeignNetworkKcp = message.enableRelayForeignNetworkKcp;
            if (message.encryptionAlgorithm != null && message.hasOwnProperty("encryptionAlgorithm"))
                object.encryptionAlgorithm = message.encryptionAlgorithm;
            if (message.disableSymHolePunching != null && message.hasOwnProperty("disableSymHolePunching"))
                object.disableSymHolePunching = message.disableSymHolePunching;
            if (message.tldDnsZone != null && message.hasOwnProperty("tldDnsZone"))
                object.tldDnsZone = message.tldDnsZone;
            if (message.quicListenPort != null && message.hasOwnProperty("quicListenPort"))
                object.quicListenPort = message.quicListenPort;
            return object;
        };

        /**
         * Converts this FlagsInConfig to JSON.
         * @function toJSON
         * @memberof common.FlagsInConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FlagsInConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FlagsInConfig
         * @function getTypeUrl
         * @memberof common.FlagsInConfig
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FlagsInConfig.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.FlagsInConfig";
        };

        return FlagsInConfig;
    })();

    common.RpcDescriptor = (function() {

        /**
         * Properties of a RpcDescriptor.
         * @memberof common
         * @interface IRpcDescriptor
         * @property {string|null} [domainName] RpcDescriptor domainName
         * @property {string|null} [protoName] RpcDescriptor protoName
         * @property {string|null} [serviceName] RpcDescriptor serviceName
         * @property {number|null} [methodIndex] RpcDescriptor methodIndex
         */

        /**
         * Constructs a new RpcDescriptor.
         * @memberof common
         * @classdesc Represents a RpcDescriptor.
         * @implements IRpcDescriptor
         * @constructor
         * @param {common.IRpcDescriptor=} [properties] Properties to set
         */
        function RpcDescriptor(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RpcDescriptor domainName.
         * @member {string} domainName
         * @memberof common.RpcDescriptor
         * @instance
         */
        RpcDescriptor.prototype.domainName = "";

        /**
         * RpcDescriptor protoName.
         * @member {string} protoName
         * @memberof common.RpcDescriptor
         * @instance
         */
        RpcDescriptor.prototype.protoName = "";

        /**
         * RpcDescriptor serviceName.
         * @member {string} serviceName
         * @memberof common.RpcDescriptor
         * @instance
         */
        RpcDescriptor.prototype.serviceName = "";

        /**
         * RpcDescriptor methodIndex.
         * @member {number} methodIndex
         * @memberof common.RpcDescriptor
         * @instance
         */
        RpcDescriptor.prototype.methodIndex = 0;

        /**
         * Creates a new RpcDescriptor instance using the specified properties.
         * @function create
         * @memberof common.RpcDescriptor
         * @static
         * @param {common.IRpcDescriptor=} [properties] Properties to set
         * @returns {common.RpcDescriptor} RpcDescriptor instance
         */
        RpcDescriptor.create = function create(properties) {
            return new RpcDescriptor(properties);
        };

        /**
         * Encodes the specified RpcDescriptor message. Does not implicitly {@link common.RpcDescriptor.verify|verify} messages.
         * @function encode
         * @memberof common.RpcDescriptor
         * @static
         * @param {common.IRpcDescriptor} message RpcDescriptor message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RpcDescriptor.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.domainName != null && Object.hasOwnProperty.call(message, "domainName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.domainName);
            if (message.protoName != null && Object.hasOwnProperty.call(message, "protoName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.protoName);
            if (message.serviceName != null && Object.hasOwnProperty.call(message, "serviceName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.serviceName);
            if (message.methodIndex != null && Object.hasOwnProperty.call(message, "methodIndex"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.methodIndex);
            return writer;
        };

        /**
         * Encodes the specified RpcDescriptor message, length delimited. Does not implicitly {@link common.RpcDescriptor.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.RpcDescriptor
         * @static
         * @param {common.IRpcDescriptor} message RpcDescriptor message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RpcDescriptor.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RpcDescriptor message from the specified reader or buffer.
         * @function decode
         * @memberof common.RpcDescriptor
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.RpcDescriptor} RpcDescriptor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RpcDescriptor.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.RpcDescriptor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.domainName = reader.string();
                        break;
                    }
                case 2: {
                        message.protoName = reader.string();
                        break;
                    }
                case 3: {
                        message.serviceName = reader.string();
                        break;
                    }
                case 4: {
                        message.methodIndex = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RpcDescriptor message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.RpcDescriptor
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.RpcDescriptor} RpcDescriptor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RpcDescriptor.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RpcDescriptor message.
         * @function verify
         * @memberof common.RpcDescriptor
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RpcDescriptor.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.domainName != null && message.hasOwnProperty("domainName"))
                if (!$util.isString(message.domainName))
                    return "domainName: string expected";
            if (message.protoName != null && message.hasOwnProperty("protoName"))
                if (!$util.isString(message.protoName))
                    return "protoName: string expected";
            if (message.serviceName != null && message.hasOwnProperty("serviceName"))
                if (!$util.isString(message.serviceName))
                    return "serviceName: string expected";
            if (message.methodIndex != null && message.hasOwnProperty("methodIndex"))
                if (!$util.isInteger(message.methodIndex))
                    return "methodIndex: integer expected";
            return null;
        };

        /**
         * Creates a RpcDescriptor message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.RpcDescriptor
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.RpcDescriptor} RpcDescriptor
         */
        RpcDescriptor.fromObject = function fromObject(object) {
            if (object instanceof $root.common.RpcDescriptor)
                return object;
            let message = new $root.common.RpcDescriptor();
            if (object.domainName != null)
                message.domainName = String(object.domainName);
            if (object.protoName != null)
                message.protoName = String(object.protoName);
            if (object.serviceName != null)
                message.serviceName = String(object.serviceName);
            if (object.methodIndex != null)
                message.methodIndex = object.methodIndex >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a RpcDescriptor message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.RpcDescriptor
         * @static
         * @param {common.RpcDescriptor} message RpcDescriptor
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RpcDescriptor.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.domainName = "";
                object.protoName = "";
                object.serviceName = "";
                object.methodIndex = 0;
            }
            if (message.domainName != null && message.hasOwnProperty("domainName"))
                object.domainName = message.domainName;
            if (message.protoName != null && message.hasOwnProperty("protoName"))
                object.protoName = message.protoName;
            if (message.serviceName != null && message.hasOwnProperty("serviceName"))
                object.serviceName = message.serviceName;
            if (message.methodIndex != null && message.hasOwnProperty("methodIndex"))
                object.methodIndex = message.methodIndex;
            return object;
        };

        /**
         * Converts this RpcDescriptor to JSON.
         * @function toJSON
         * @memberof common.RpcDescriptor
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RpcDescriptor.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RpcDescriptor
         * @function getTypeUrl
         * @memberof common.RpcDescriptor
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RpcDescriptor.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.RpcDescriptor";
        };

        return RpcDescriptor;
    })();

    common.RpcRequest = (function() {

        /**
         * Properties of a RpcRequest.
         * @memberof common
         * @interface IRpcRequest
         * @property {common.IRpcDescriptor|null} [descriptor] RpcRequest descriptor
         * @property {Uint8Array|null} [request] RpcRequest request
         * @property {number|null} [timeoutMs] RpcRequest timeoutMs
         */

        /**
         * Constructs a new RpcRequest.
         * @memberof common
         * @classdesc Represents a RpcRequest.
         * @implements IRpcRequest
         * @constructor
         * @param {common.IRpcRequest=} [properties] Properties to set
         */
        function RpcRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RpcRequest descriptor.
         * @member {common.IRpcDescriptor|null|undefined} descriptor
         * @memberof common.RpcRequest
         * @instance
         */
        RpcRequest.prototype.descriptor = null;

        /**
         * RpcRequest request.
         * @member {Uint8Array} request
         * @memberof common.RpcRequest
         * @instance
         */
        RpcRequest.prototype.request = $util.newBuffer([]);

        /**
         * RpcRequest timeoutMs.
         * @member {number} timeoutMs
         * @memberof common.RpcRequest
         * @instance
         */
        RpcRequest.prototype.timeoutMs = 0;

        /**
         * Creates a new RpcRequest instance using the specified properties.
         * @function create
         * @memberof common.RpcRequest
         * @static
         * @param {common.IRpcRequest=} [properties] Properties to set
         * @returns {common.RpcRequest} RpcRequest instance
         */
        RpcRequest.create = function create(properties) {
            return new RpcRequest(properties);
        };

        /**
         * Encodes the specified RpcRequest message. Does not implicitly {@link common.RpcRequest.verify|verify} messages.
         * @function encode
         * @memberof common.RpcRequest
         * @static
         * @param {common.IRpcRequest} message RpcRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RpcRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.descriptor != null && Object.hasOwnProperty.call(message, "descriptor"))
                $root.common.RpcDescriptor.encode(message.descriptor, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.request != null && Object.hasOwnProperty.call(message, "request"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.request);
            if (message.timeoutMs != null && Object.hasOwnProperty.call(message, "timeoutMs"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.timeoutMs);
            return writer;
        };

        /**
         * Encodes the specified RpcRequest message, length delimited. Does not implicitly {@link common.RpcRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.RpcRequest
         * @static
         * @param {common.IRpcRequest} message RpcRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RpcRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RpcRequest message from the specified reader or buffer.
         * @function decode
         * @memberof common.RpcRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.RpcRequest} RpcRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RpcRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.RpcRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.descriptor = $root.common.RpcDescriptor.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.request = reader.bytes();
                        break;
                    }
                case 3: {
                        message.timeoutMs = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RpcRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.RpcRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.RpcRequest} RpcRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RpcRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RpcRequest message.
         * @function verify
         * @memberof common.RpcRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RpcRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.descriptor != null && message.hasOwnProperty("descriptor")) {
                let error = $root.common.RpcDescriptor.verify(message.descriptor);
                if (error)
                    return "descriptor." + error;
            }
            if (message.request != null && message.hasOwnProperty("request"))
                if (!(message.request && typeof message.request.length === "number" || $util.isString(message.request)))
                    return "request: buffer expected";
            if (message.timeoutMs != null && message.hasOwnProperty("timeoutMs"))
                if (!$util.isInteger(message.timeoutMs))
                    return "timeoutMs: integer expected";
            return null;
        };

        /**
         * Creates a RpcRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.RpcRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.RpcRequest} RpcRequest
         */
        RpcRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.common.RpcRequest)
                return object;
            let message = new $root.common.RpcRequest();
            if (object.descriptor != null) {
                if (typeof object.descriptor !== "object")
                    throw TypeError(".common.RpcRequest.descriptor: object expected");
                message.descriptor = $root.common.RpcDescriptor.fromObject(object.descriptor);
            }
            if (object.request != null)
                if (typeof object.request === "string")
                    $util.base64.decode(object.request, message.request = $util.newBuffer($util.base64.length(object.request)), 0);
                else if (object.request.length >= 0)
                    message.request = object.request;
            if (object.timeoutMs != null)
                message.timeoutMs = object.timeoutMs | 0;
            return message;
        };

        /**
         * Creates a plain object from a RpcRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.RpcRequest
         * @static
         * @param {common.RpcRequest} message RpcRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RpcRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.descriptor = null;
                if (options.bytes === String)
                    object.request = "";
                else {
                    object.request = [];
                    if (options.bytes !== Array)
                        object.request = $util.newBuffer(object.request);
                }
                object.timeoutMs = 0;
            }
            if (message.descriptor != null && message.hasOwnProperty("descriptor"))
                object.descriptor = $root.common.RpcDescriptor.toObject(message.descriptor, options);
            if (message.request != null && message.hasOwnProperty("request"))
                object.request = options.bytes === String ? $util.base64.encode(message.request, 0, message.request.length) : options.bytes === Array ? Array.prototype.slice.call(message.request) : message.request;
            if (message.timeoutMs != null && message.hasOwnProperty("timeoutMs"))
                object.timeoutMs = message.timeoutMs;
            return object;
        };

        /**
         * Converts this RpcRequest to JSON.
         * @function toJSON
         * @memberof common.RpcRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RpcRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RpcRequest
         * @function getTypeUrl
         * @memberof common.RpcRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RpcRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.RpcRequest";
        };

        return RpcRequest;
    })();

    common.RpcResponse = (function() {

        /**
         * Properties of a RpcResponse.
         * @memberof common
         * @interface IRpcResponse
         * @property {Uint8Array|null} [response] RpcResponse response
         * @property {error.IError|null} [error] RpcResponse error
         * @property {number|Long|null} [runtimeUs] RpcResponse runtimeUs
         */

        /**
         * Constructs a new RpcResponse.
         * @memberof common
         * @classdesc Represents a RpcResponse.
         * @implements IRpcResponse
         * @constructor
         * @param {common.IRpcResponse=} [properties] Properties to set
         */
        function RpcResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RpcResponse response.
         * @member {Uint8Array} response
         * @memberof common.RpcResponse
         * @instance
         */
        RpcResponse.prototype.response = $util.newBuffer([]);

        /**
         * RpcResponse error.
         * @member {error.IError|null|undefined} error
         * @memberof common.RpcResponse
         * @instance
         */
        RpcResponse.prototype.error = null;

        /**
         * RpcResponse runtimeUs.
         * @member {number|Long} runtimeUs
         * @memberof common.RpcResponse
         * @instance
         */
        RpcResponse.prototype.runtimeUs = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new RpcResponse instance using the specified properties.
         * @function create
         * @memberof common.RpcResponse
         * @static
         * @param {common.IRpcResponse=} [properties] Properties to set
         * @returns {common.RpcResponse} RpcResponse instance
         */
        RpcResponse.create = function create(properties) {
            return new RpcResponse(properties);
        };

        /**
         * Encodes the specified RpcResponse message. Does not implicitly {@link common.RpcResponse.verify|verify} messages.
         * @function encode
         * @memberof common.RpcResponse
         * @static
         * @param {common.IRpcResponse} message RpcResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RpcResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.response != null && Object.hasOwnProperty.call(message, "response"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.response);
            if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                $root.error.Error.encode(message.error, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.runtimeUs != null && Object.hasOwnProperty.call(message, "runtimeUs"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.runtimeUs);
            return writer;
        };

        /**
         * Encodes the specified RpcResponse message, length delimited. Does not implicitly {@link common.RpcResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.RpcResponse
         * @static
         * @param {common.IRpcResponse} message RpcResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RpcResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RpcResponse message from the specified reader or buffer.
         * @function decode
         * @memberof common.RpcResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.RpcResponse} RpcResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RpcResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.RpcResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.response = reader.bytes();
                        break;
                    }
                case 2: {
                        message.error = $root.error.Error.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.runtimeUs = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RpcResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.RpcResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.RpcResponse} RpcResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RpcResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RpcResponse message.
         * @function verify
         * @memberof common.RpcResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RpcResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.response != null && message.hasOwnProperty("response"))
                if (!(message.response && typeof message.response.length === "number" || $util.isString(message.response)))
                    return "response: buffer expected";
            if (message.error != null && message.hasOwnProperty("error")) {
                let error = $root.error.Error.verify(message.error);
                if (error)
                    return "error." + error;
            }
            if (message.runtimeUs != null && message.hasOwnProperty("runtimeUs"))
                if (!$util.isInteger(message.runtimeUs) && !(message.runtimeUs && $util.isInteger(message.runtimeUs.low) && $util.isInteger(message.runtimeUs.high)))
                    return "runtimeUs: integer|Long expected";
            return null;
        };

        /**
         * Creates a RpcResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.RpcResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.RpcResponse} RpcResponse
         */
        RpcResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.common.RpcResponse)
                return object;
            let message = new $root.common.RpcResponse();
            if (object.response != null)
                if (typeof object.response === "string")
                    $util.base64.decode(object.response, message.response = $util.newBuffer($util.base64.length(object.response)), 0);
                else if (object.response.length >= 0)
                    message.response = object.response;
            if (object.error != null) {
                if (typeof object.error !== "object")
                    throw TypeError(".common.RpcResponse.error: object expected");
                message.error = $root.error.Error.fromObject(object.error);
            }
            if (object.runtimeUs != null)
                if ($util.Long)
                    (message.runtimeUs = $util.Long.fromValue(object.runtimeUs)).unsigned = true;
                else if (typeof object.runtimeUs === "string")
                    message.runtimeUs = parseInt(object.runtimeUs, 10);
                else if (typeof object.runtimeUs === "number")
                    message.runtimeUs = object.runtimeUs;
                else if (typeof object.runtimeUs === "object")
                    message.runtimeUs = new $util.LongBits(object.runtimeUs.low >>> 0, object.runtimeUs.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a RpcResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.RpcResponse
         * @static
         * @param {common.RpcResponse} message RpcResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RpcResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.response = "";
                else {
                    object.response = [];
                    if (options.bytes !== Array)
                        object.response = $util.newBuffer(object.response);
                }
                object.error = null;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.runtimeUs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.runtimeUs = options.longs === String ? "0" : 0;
            }
            if (message.response != null && message.hasOwnProperty("response"))
                object.response = options.bytes === String ? $util.base64.encode(message.response, 0, message.response.length) : options.bytes === Array ? Array.prototype.slice.call(message.response) : message.response;
            if (message.error != null && message.hasOwnProperty("error"))
                object.error = $root.error.Error.toObject(message.error, options);
            if (message.runtimeUs != null && message.hasOwnProperty("runtimeUs"))
                if (typeof message.runtimeUs === "number")
                    object.runtimeUs = options.longs === String ? String(message.runtimeUs) : message.runtimeUs;
                else
                    object.runtimeUs = options.longs === String ? $util.Long.prototype.toString.call(message.runtimeUs) : options.longs === Number ? new $util.LongBits(message.runtimeUs.low >>> 0, message.runtimeUs.high >>> 0).toNumber(true) : message.runtimeUs;
            return object;
        };

        /**
         * Converts this RpcResponse to JSON.
         * @function toJSON
         * @memberof common.RpcResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RpcResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RpcResponse
         * @function getTypeUrl
         * @memberof common.RpcResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RpcResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.RpcResponse";
        };

        return RpcResponse;
    })();

    /**
     * CompressionAlgoPb enum.
     * @name common.CompressionAlgoPb
     * @enum {number}
     * @property {number} Invalid=0 Invalid value
     * @property {number} None=1 None value
     * @property {number} Zstd=2 Zstd value
     */
    common.CompressionAlgoPb = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Invalid"] = 0;
        values[valuesById[1] = "None"] = 1;
        values[valuesById[2] = "Zstd"] = 2;
        return values;
    })();

    common.RpcCompressionInfo = (function() {

        /**
         * Properties of a RpcCompressionInfo.
         * @memberof common
         * @interface IRpcCompressionInfo
         * @property {common.CompressionAlgoPb|null} [algo] RpcCompressionInfo algo
         * @property {common.CompressionAlgoPb|null} [acceptedAlgo] RpcCompressionInfo acceptedAlgo
         */

        /**
         * Constructs a new RpcCompressionInfo.
         * @memberof common
         * @classdesc Represents a RpcCompressionInfo.
         * @implements IRpcCompressionInfo
         * @constructor
         * @param {common.IRpcCompressionInfo=} [properties] Properties to set
         */
        function RpcCompressionInfo(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RpcCompressionInfo algo.
         * @member {common.CompressionAlgoPb} algo
         * @memberof common.RpcCompressionInfo
         * @instance
         */
        RpcCompressionInfo.prototype.algo = 0;

        /**
         * RpcCompressionInfo acceptedAlgo.
         * @member {common.CompressionAlgoPb} acceptedAlgo
         * @memberof common.RpcCompressionInfo
         * @instance
         */
        RpcCompressionInfo.prototype.acceptedAlgo = 0;

        /**
         * Creates a new RpcCompressionInfo instance using the specified properties.
         * @function create
         * @memberof common.RpcCompressionInfo
         * @static
         * @param {common.IRpcCompressionInfo=} [properties] Properties to set
         * @returns {common.RpcCompressionInfo} RpcCompressionInfo instance
         */
        RpcCompressionInfo.create = function create(properties) {
            return new RpcCompressionInfo(properties);
        };

        /**
         * Encodes the specified RpcCompressionInfo message. Does not implicitly {@link common.RpcCompressionInfo.verify|verify} messages.
         * @function encode
         * @memberof common.RpcCompressionInfo
         * @static
         * @param {common.IRpcCompressionInfo} message RpcCompressionInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RpcCompressionInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.algo != null && Object.hasOwnProperty.call(message, "algo"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.algo);
            if (message.acceptedAlgo != null && Object.hasOwnProperty.call(message, "acceptedAlgo"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.acceptedAlgo);
            return writer;
        };

        /**
         * Encodes the specified RpcCompressionInfo message, length delimited. Does not implicitly {@link common.RpcCompressionInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.RpcCompressionInfo
         * @static
         * @param {common.IRpcCompressionInfo} message RpcCompressionInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RpcCompressionInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RpcCompressionInfo message from the specified reader or buffer.
         * @function decode
         * @memberof common.RpcCompressionInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.RpcCompressionInfo} RpcCompressionInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RpcCompressionInfo.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.RpcCompressionInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.algo = reader.int32();
                        break;
                    }
                case 2: {
                        message.acceptedAlgo = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RpcCompressionInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.RpcCompressionInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.RpcCompressionInfo} RpcCompressionInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RpcCompressionInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RpcCompressionInfo message.
         * @function verify
         * @memberof common.RpcCompressionInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RpcCompressionInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.algo != null && message.hasOwnProperty("algo"))
                switch (message.algo) {
                default:
                    return "algo: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.acceptedAlgo != null && message.hasOwnProperty("acceptedAlgo"))
                switch (message.acceptedAlgo) {
                default:
                    return "acceptedAlgo: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            return null;
        };

        /**
         * Creates a RpcCompressionInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.RpcCompressionInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.RpcCompressionInfo} RpcCompressionInfo
         */
        RpcCompressionInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.common.RpcCompressionInfo)
                return object;
            let message = new $root.common.RpcCompressionInfo();
            switch (object.algo) {
            default:
                if (typeof object.algo === "number") {
                    message.algo = object.algo;
                    break;
                }
                break;
            case "Invalid":
            case 0:
                message.algo = 0;
                break;
            case "None":
            case 1:
                message.algo = 1;
                break;
            case "Zstd":
            case 2:
                message.algo = 2;
                break;
            }
            switch (object.acceptedAlgo) {
            default:
                if (typeof object.acceptedAlgo === "number") {
                    message.acceptedAlgo = object.acceptedAlgo;
                    break;
                }
                break;
            case "Invalid":
            case 0:
                message.acceptedAlgo = 0;
                break;
            case "None":
            case 1:
                message.acceptedAlgo = 1;
                break;
            case "Zstd":
            case 2:
                message.acceptedAlgo = 2;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a RpcCompressionInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.RpcCompressionInfo
         * @static
         * @param {common.RpcCompressionInfo} message RpcCompressionInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RpcCompressionInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.algo = options.enums === String ? "Invalid" : 0;
                object.acceptedAlgo = options.enums === String ? "Invalid" : 0;
            }
            if (message.algo != null && message.hasOwnProperty("algo"))
                object.algo = options.enums === String ? $root.common.CompressionAlgoPb[message.algo] === undefined ? message.algo : $root.common.CompressionAlgoPb[message.algo] : message.algo;
            if (message.acceptedAlgo != null && message.hasOwnProperty("acceptedAlgo"))
                object.acceptedAlgo = options.enums === String ? $root.common.CompressionAlgoPb[message.acceptedAlgo] === undefined ? message.acceptedAlgo : $root.common.CompressionAlgoPb[message.acceptedAlgo] : message.acceptedAlgo;
            return object;
        };

        /**
         * Converts this RpcCompressionInfo to JSON.
         * @function toJSON
         * @memberof common.RpcCompressionInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RpcCompressionInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RpcCompressionInfo
         * @function getTypeUrl
         * @memberof common.RpcCompressionInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RpcCompressionInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.RpcCompressionInfo";
        };

        return RpcCompressionInfo;
    })();

    common.RpcPacket = (function() {

        /**
         * Properties of a RpcPacket.
         * @memberof common
         * @interface IRpcPacket
         * @property {number|null} [fromPeer] RpcPacket fromPeer
         * @property {number|null} [toPeer] RpcPacket toPeer
         * @property {number|Long|null} [transactionId] RpcPacket transactionId
         * @property {common.IRpcDescriptor|null} [descriptor] RpcPacket descriptor
         * @property {Uint8Array|null} [body] RpcPacket body
         * @property {boolean|null} [isRequest] RpcPacket isRequest
         * @property {number|null} [totalPieces] RpcPacket totalPieces
         * @property {number|null} [pieceIdx] RpcPacket pieceIdx
         * @property {number|null} [traceId] RpcPacket traceId
         * @property {common.IRpcCompressionInfo|null} [compressionInfo] RpcPacket compressionInfo
         */

        /**
         * Constructs a new RpcPacket.
         * @memberof common
         * @classdesc Represents a RpcPacket.
         * @implements IRpcPacket
         * @constructor
         * @param {common.IRpcPacket=} [properties] Properties to set
         */
        function RpcPacket(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RpcPacket fromPeer.
         * @member {number} fromPeer
         * @memberof common.RpcPacket
         * @instance
         */
        RpcPacket.prototype.fromPeer = 0;

        /**
         * RpcPacket toPeer.
         * @member {number} toPeer
         * @memberof common.RpcPacket
         * @instance
         */
        RpcPacket.prototype.toPeer = 0;

        /**
         * RpcPacket transactionId.
         * @member {number|Long} transactionId
         * @memberof common.RpcPacket
         * @instance
         */
        RpcPacket.prototype.transactionId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RpcPacket descriptor.
         * @member {common.IRpcDescriptor|null|undefined} descriptor
         * @memberof common.RpcPacket
         * @instance
         */
        RpcPacket.prototype.descriptor = null;

        /**
         * RpcPacket body.
         * @member {Uint8Array} body
         * @memberof common.RpcPacket
         * @instance
         */
        RpcPacket.prototype.body = $util.newBuffer([]);

        /**
         * RpcPacket isRequest.
         * @member {boolean} isRequest
         * @memberof common.RpcPacket
         * @instance
         */
        RpcPacket.prototype.isRequest = false;

        /**
         * RpcPacket totalPieces.
         * @member {number} totalPieces
         * @memberof common.RpcPacket
         * @instance
         */
        RpcPacket.prototype.totalPieces = 0;

        /**
         * RpcPacket pieceIdx.
         * @member {number} pieceIdx
         * @memberof common.RpcPacket
         * @instance
         */
        RpcPacket.prototype.pieceIdx = 0;

        /**
         * RpcPacket traceId.
         * @member {number} traceId
         * @memberof common.RpcPacket
         * @instance
         */
        RpcPacket.prototype.traceId = 0;

        /**
         * RpcPacket compressionInfo.
         * @member {common.IRpcCompressionInfo|null|undefined} compressionInfo
         * @memberof common.RpcPacket
         * @instance
         */
        RpcPacket.prototype.compressionInfo = null;

        /**
         * Creates a new RpcPacket instance using the specified properties.
         * @function create
         * @memberof common.RpcPacket
         * @static
         * @param {common.IRpcPacket=} [properties] Properties to set
         * @returns {common.RpcPacket} RpcPacket instance
         */
        RpcPacket.create = function create(properties) {
            return new RpcPacket(properties);
        };

        /**
         * Encodes the specified RpcPacket message. Does not implicitly {@link common.RpcPacket.verify|verify} messages.
         * @function encode
         * @memberof common.RpcPacket
         * @static
         * @param {common.IRpcPacket} message RpcPacket message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RpcPacket.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.fromPeer != null && Object.hasOwnProperty.call(message, "fromPeer"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.fromPeer);
            if (message.toPeer != null && Object.hasOwnProperty.call(message, "toPeer"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.toPeer);
            if (message.transactionId != null && Object.hasOwnProperty.call(message, "transactionId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.transactionId);
            if (message.descriptor != null && Object.hasOwnProperty.call(message, "descriptor"))
                $root.common.RpcDescriptor.encode(message.descriptor, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.body != null && Object.hasOwnProperty.call(message, "body"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.body);
            if (message.isRequest != null && Object.hasOwnProperty.call(message, "isRequest"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.isRequest);
            if (message.totalPieces != null && Object.hasOwnProperty.call(message, "totalPieces"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.totalPieces);
            if (message.pieceIdx != null && Object.hasOwnProperty.call(message, "pieceIdx"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.pieceIdx);
            if (message.traceId != null && Object.hasOwnProperty.call(message, "traceId"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.traceId);
            if (message.compressionInfo != null && Object.hasOwnProperty.call(message, "compressionInfo"))
                $root.common.RpcCompressionInfo.encode(message.compressionInfo, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RpcPacket message, length delimited. Does not implicitly {@link common.RpcPacket.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.RpcPacket
         * @static
         * @param {common.IRpcPacket} message RpcPacket message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RpcPacket.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RpcPacket message from the specified reader or buffer.
         * @function decode
         * @memberof common.RpcPacket
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.RpcPacket} RpcPacket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RpcPacket.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.RpcPacket();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.fromPeer = reader.uint32();
                        break;
                    }
                case 2: {
                        message.toPeer = reader.uint32();
                        break;
                    }
                case 3: {
                        message.transactionId = reader.int64();
                        break;
                    }
                case 4: {
                        message.descriptor = $root.common.RpcDescriptor.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.body = reader.bytes();
                        break;
                    }
                case 6: {
                        message.isRequest = reader.bool();
                        break;
                    }
                case 7: {
                        message.totalPieces = reader.uint32();
                        break;
                    }
                case 8: {
                        message.pieceIdx = reader.uint32();
                        break;
                    }
                case 9: {
                        message.traceId = reader.int32();
                        break;
                    }
                case 10: {
                        message.compressionInfo = $root.common.RpcCompressionInfo.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RpcPacket message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.RpcPacket
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.RpcPacket} RpcPacket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RpcPacket.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RpcPacket message.
         * @function verify
         * @memberof common.RpcPacket
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RpcPacket.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.fromPeer != null && message.hasOwnProperty("fromPeer"))
                if (!$util.isInteger(message.fromPeer))
                    return "fromPeer: integer expected";
            if (message.toPeer != null && message.hasOwnProperty("toPeer"))
                if (!$util.isInteger(message.toPeer))
                    return "toPeer: integer expected";
            if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                if (!$util.isInteger(message.transactionId) && !(message.transactionId && $util.isInteger(message.transactionId.low) && $util.isInteger(message.transactionId.high)))
                    return "transactionId: integer|Long expected";
            if (message.descriptor != null && message.hasOwnProperty("descriptor")) {
                let error = $root.common.RpcDescriptor.verify(message.descriptor);
                if (error)
                    return "descriptor." + error;
            }
            if (message.body != null && message.hasOwnProperty("body"))
                if (!(message.body && typeof message.body.length === "number" || $util.isString(message.body)))
                    return "body: buffer expected";
            if (message.isRequest != null && message.hasOwnProperty("isRequest"))
                if (typeof message.isRequest !== "boolean")
                    return "isRequest: boolean expected";
            if (message.totalPieces != null && message.hasOwnProperty("totalPieces"))
                if (!$util.isInteger(message.totalPieces))
                    return "totalPieces: integer expected";
            if (message.pieceIdx != null && message.hasOwnProperty("pieceIdx"))
                if (!$util.isInteger(message.pieceIdx))
                    return "pieceIdx: integer expected";
            if (message.traceId != null && message.hasOwnProperty("traceId"))
                if (!$util.isInteger(message.traceId))
                    return "traceId: integer expected";
            if (message.compressionInfo != null && message.hasOwnProperty("compressionInfo")) {
                let error = $root.common.RpcCompressionInfo.verify(message.compressionInfo);
                if (error)
                    return "compressionInfo." + error;
            }
            return null;
        };

        /**
         * Creates a RpcPacket message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.RpcPacket
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.RpcPacket} RpcPacket
         */
        RpcPacket.fromObject = function fromObject(object) {
            if (object instanceof $root.common.RpcPacket)
                return object;
            let message = new $root.common.RpcPacket();
            if (object.fromPeer != null)
                message.fromPeer = object.fromPeer >>> 0;
            if (object.toPeer != null)
                message.toPeer = object.toPeer >>> 0;
            if (object.transactionId != null)
                if ($util.Long)
                    (message.transactionId = $util.Long.fromValue(object.transactionId)).unsigned = false;
                else if (typeof object.transactionId === "string")
                    message.transactionId = parseInt(object.transactionId, 10);
                else if (typeof object.transactionId === "number")
                    message.transactionId = object.transactionId;
                else if (typeof object.transactionId === "object")
                    message.transactionId = new $util.LongBits(object.transactionId.low >>> 0, object.transactionId.high >>> 0).toNumber();
            if (object.descriptor != null) {
                if (typeof object.descriptor !== "object")
                    throw TypeError(".common.RpcPacket.descriptor: object expected");
                message.descriptor = $root.common.RpcDescriptor.fromObject(object.descriptor);
            }
            if (object.body != null)
                if (typeof object.body === "string")
                    $util.base64.decode(object.body, message.body = $util.newBuffer($util.base64.length(object.body)), 0);
                else if (object.body.length >= 0)
                    message.body = object.body;
            if (object.isRequest != null)
                message.isRequest = Boolean(object.isRequest);
            if (object.totalPieces != null)
                message.totalPieces = object.totalPieces >>> 0;
            if (object.pieceIdx != null)
                message.pieceIdx = object.pieceIdx >>> 0;
            if (object.traceId != null)
                message.traceId = object.traceId | 0;
            if (object.compressionInfo != null) {
                if (typeof object.compressionInfo !== "object")
                    throw TypeError(".common.RpcPacket.compressionInfo: object expected");
                message.compressionInfo = $root.common.RpcCompressionInfo.fromObject(object.compressionInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a RpcPacket message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.RpcPacket
         * @static
         * @param {common.RpcPacket} message RpcPacket
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RpcPacket.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.fromPeer = 0;
                object.toPeer = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.transactionId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.transactionId = options.longs === String ? "0" : 0;
                object.descriptor = null;
                if (options.bytes === String)
                    object.body = "";
                else {
                    object.body = [];
                    if (options.bytes !== Array)
                        object.body = $util.newBuffer(object.body);
                }
                object.isRequest = false;
                object.totalPieces = 0;
                object.pieceIdx = 0;
                object.traceId = 0;
                object.compressionInfo = null;
            }
            if (message.fromPeer != null && message.hasOwnProperty("fromPeer"))
                object.fromPeer = message.fromPeer;
            if (message.toPeer != null && message.hasOwnProperty("toPeer"))
                object.toPeer = message.toPeer;
            if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                if (typeof message.transactionId === "number")
                    object.transactionId = options.longs === String ? String(message.transactionId) : message.transactionId;
                else
                    object.transactionId = options.longs === String ? $util.Long.prototype.toString.call(message.transactionId) : options.longs === Number ? new $util.LongBits(message.transactionId.low >>> 0, message.transactionId.high >>> 0).toNumber() : message.transactionId;
            if (message.descriptor != null && message.hasOwnProperty("descriptor"))
                object.descriptor = $root.common.RpcDescriptor.toObject(message.descriptor, options);
            if (message.body != null && message.hasOwnProperty("body"))
                object.body = options.bytes === String ? $util.base64.encode(message.body, 0, message.body.length) : options.bytes === Array ? Array.prototype.slice.call(message.body) : message.body;
            if (message.isRequest != null && message.hasOwnProperty("isRequest"))
                object.isRequest = message.isRequest;
            if (message.totalPieces != null && message.hasOwnProperty("totalPieces"))
                object.totalPieces = message.totalPieces;
            if (message.pieceIdx != null && message.hasOwnProperty("pieceIdx"))
                object.pieceIdx = message.pieceIdx;
            if (message.traceId != null && message.hasOwnProperty("traceId"))
                object.traceId = message.traceId;
            if (message.compressionInfo != null && message.hasOwnProperty("compressionInfo"))
                object.compressionInfo = $root.common.RpcCompressionInfo.toObject(message.compressionInfo, options);
            return object;
        };

        /**
         * Converts this RpcPacket to JSON.
         * @function toJSON
         * @memberof common.RpcPacket
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RpcPacket.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RpcPacket
         * @function getTypeUrl
         * @memberof common.RpcPacket
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RpcPacket.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.RpcPacket";
        };

        return RpcPacket;
    })();

    common.Void = (function() {

        /**
         * Properties of a Void.
         * @memberof common
         * @interface IVoid
         */

        /**
         * Constructs a new Void.
         * @memberof common
         * @classdesc Represents a Void.
         * @implements IVoid
         * @constructor
         * @param {common.IVoid=} [properties] Properties to set
         */
        function Void(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Void instance using the specified properties.
         * @function create
         * @memberof common.Void
         * @static
         * @param {common.IVoid=} [properties] Properties to set
         * @returns {common.Void} Void instance
         */
        Void.create = function create(properties) {
            return new Void(properties);
        };

        /**
         * Encodes the specified Void message. Does not implicitly {@link common.Void.verify|verify} messages.
         * @function encode
         * @memberof common.Void
         * @static
         * @param {common.IVoid} message Void message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Void.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified Void message, length delimited. Does not implicitly {@link common.Void.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.Void
         * @static
         * @param {common.IVoid} message Void message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Void.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Void message from the specified reader or buffer.
         * @function decode
         * @memberof common.Void
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.Void} Void
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Void.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.Void();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Void message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.Void
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.Void} Void
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Void.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Void message.
         * @function verify
         * @memberof common.Void
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Void.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a Void message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.Void
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.Void} Void
         */
        Void.fromObject = function fromObject(object) {
            if (object instanceof $root.common.Void)
                return object;
            return new $root.common.Void();
        };

        /**
         * Creates a plain object from a Void message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.Void
         * @static
         * @param {common.Void} message Void
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Void.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this Void to JSON.
         * @function toJSON
         * @memberof common.Void
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Void.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Void
         * @function getTypeUrl
         * @memberof common.Void
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Void.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.Void";
        };

        return Void;
    })();

    common.UUID = (function() {

        /**
         * Properties of a UUID.
         * @memberof common
         * @interface IUUID
         * @property {number|null} [part1] UUID part1
         * @property {number|null} [part2] UUID part2
         * @property {number|null} [part3] UUID part3
         * @property {number|null} [part4] UUID part4
         */

        /**
         * Constructs a new UUID.
         * @memberof common
         * @classdesc Represents a UUID.
         * @implements IUUID
         * @constructor
         * @param {common.IUUID=} [properties] Properties to set
         */
        function UUID(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UUID part1.
         * @member {number} part1
         * @memberof common.UUID
         * @instance
         */
        UUID.prototype.part1 = 0;

        /**
         * UUID part2.
         * @member {number} part2
         * @memberof common.UUID
         * @instance
         */
        UUID.prototype.part2 = 0;

        /**
         * UUID part3.
         * @member {number} part3
         * @memberof common.UUID
         * @instance
         */
        UUID.prototype.part3 = 0;

        /**
         * UUID part4.
         * @member {number} part4
         * @memberof common.UUID
         * @instance
         */
        UUID.prototype.part4 = 0;

        /**
         * Creates a new UUID instance using the specified properties.
         * @function create
         * @memberof common.UUID
         * @static
         * @param {common.IUUID=} [properties] Properties to set
         * @returns {common.UUID} UUID instance
         */
        UUID.create = function create(properties) {
            return new UUID(properties);
        };

        /**
         * Encodes the specified UUID message. Does not implicitly {@link common.UUID.verify|verify} messages.
         * @function encode
         * @memberof common.UUID
         * @static
         * @param {common.IUUID} message UUID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UUID.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.part1 != null && Object.hasOwnProperty.call(message, "part1"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.part1);
            if (message.part2 != null && Object.hasOwnProperty.call(message, "part2"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.part2);
            if (message.part3 != null && Object.hasOwnProperty.call(message, "part3"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.part3);
            if (message.part4 != null && Object.hasOwnProperty.call(message, "part4"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.part4);
            return writer;
        };

        /**
         * Encodes the specified UUID message, length delimited. Does not implicitly {@link common.UUID.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.UUID
         * @static
         * @param {common.IUUID} message UUID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UUID.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UUID message from the specified reader or buffer.
         * @function decode
         * @memberof common.UUID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.UUID} UUID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UUID.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.UUID();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.part1 = reader.uint32();
                        break;
                    }
                case 2: {
                        message.part2 = reader.uint32();
                        break;
                    }
                case 3: {
                        message.part3 = reader.uint32();
                        break;
                    }
                case 4: {
                        message.part4 = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UUID message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.UUID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.UUID} UUID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UUID.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UUID message.
         * @function verify
         * @memberof common.UUID
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UUID.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.part1 != null && message.hasOwnProperty("part1"))
                if (!$util.isInteger(message.part1))
                    return "part1: integer expected";
            if (message.part2 != null && message.hasOwnProperty("part2"))
                if (!$util.isInteger(message.part2))
                    return "part2: integer expected";
            if (message.part3 != null && message.hasOwnProperty("part3"))
                if (!$util.isInteger(message.part3))
                    return "part3: integer expected";
            if (message.part4 != null && message.hasOwnProperty("part4"))
                if (!$util.isInteger(message.part4))
                    return "part4: integer expected";
            return null;
        };

        /**
         * Creates a UUID message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.UUID
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.UUID} UUID
         */
        UUID.fromObject = function fromObject(object) {
            if (object instanceof $root.common.UUID)
                return object;
            let message = new $root.common.UUID();
            if (object.part1 != null)
                message.part1 = object.part1 >>> 0;
            if (object.part2 != null)
                message.part2 = object.part2 >>> 0;
            if (object.part3 != null)
                message.part3 = object.part3 >>> 0;
            if (object.part4 != null)
                message.part4 = object.part4 >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a UUID message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.UUID
         * @static
         * @param {common.UUID} message UUID
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UUID.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.part1 = 0;
                object.part2 = 0;
                object.part3 = 0;
                object.part4 = 0;
            }
            if (message.part1 != null && message.hasOwnProperty("part1"))
                object.part1 = message.part1;
            if (message.part2 != null && message.hasOwnProperty("part2"))
                object.part2 = message.part2;
            if (message.part3 != null && message.hasOwnProperty("part3"))
                object.part3 = message.part3;
            if (message.part4 != null && message.hasOwnProperty("part4"))
                object.part4 = message.part4;
            return object;
        };

        /**
         * Converts this UUID to JSON.
         * @function toJSON
         * @memberof common.UUID
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UUID.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UUID
         * @function getTypeUrl
         * @memberof common.UUID
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UUID.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.UUID";
        };

        return UUID;
    })();

    /**
     * NatType enum.
     * @name common.NatType
     * @enum {number}
     * @property {number} Unknown=0 Unknown value
     * @property {number} OpenInternet=1 OpenInternet value
     * @property {number} NoPAT=2 NoPAT value
     * @property {number} FullCone=3 FullCone value
     * @property {number} Restricted=4 Restricted value
     * @property {number} PortRestricted=5 PortRestricted value
     * @property {number} Symmetric=6 Symmetric value
     * @property {number} SymUdpFirewall=7 SymUdpFirewall value
     * @property {number} SymmetricEasyInc=8 SymmetricEasyInc value
     * @property {number} SymmetricEasyDec=9 SymmetricEasyDec value
     */
    common.NatType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Unknown"] = 0;
        values[valuesById[1] = "OpenInternet"] = 1;
        values[valuesById[2] = "NoPAT"] = 2;
        values[valuesById[3] = "FullCone"] = 3;
        values[valuesById[4] = "Restricted"] = 4;
        values[valuesById[5] = "PortRestricted"] = 5;
        values[valuesById[6] = "Symmetric"] = 6;
        values[valuesById[7] = "SymUdpFirewall"] = 7;
        values[valuesById[8] = "SymmetricEasyInc"] = 8;
        values[valuesById[9] = "SymmetricEasyDec"] = 9;
        return values;
    })();

    common.Ipv4Addr = (function() {

        /**
         * Properties of an Ipv4Addr.
         * @memberof common
         * @interface IIpv4Addr
         * @property {number|null} [addr] Ipv4Addr addr
         */

        /**
         * Constructs a new Ipv4Addr.
         * @memberof common
         * @classdesc Represents an Ipv4Addr.
         * @implements IIpv4Addr
         * @constructor
         * @param {common.IIpv4Addr=} [properties] Properties to set
         */
        function Ipv4Addr(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Ipv4Addr addr.
         * @member {number} addr
         * @memberof common.Ipv4Addr
         * @instance
         */
        Ipv4Addr.prototype.addr = 0;

        /**
         * Creates a new Ipv4Addr instance using the specified properties.
         * @function create
         * @memberof common.Ipv4Addr
         * @static
         * @param {common.IIpv4Addr=} [properties] Properties to set
         * @returns {common.Ipv4Addr} Ipv4Addr instance
         */
        Ipv4Addr.create = function create(properties) {
            return new Ipv4Addr(properties);
        };

        /**
         * Encodes the specified Ipv4Addr message. Does not implicitly {@link common.Ipv4Addr.verify|verify} messages.
         * @function encode
         * @memberof common.Ipv4Addr
         * @static
         * @param {common.IIpv4Addr} message Ipv4Addr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ipv4Addr.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.addr != null && Object.hasOwnProperty.call(message, "addr"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.addr);
            return writer;
        };

        /**
         * Encodes the specified Ipv4Addr message, length delimited. Does not implicitly {@link common.Ipv4Addr.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.Ipv4Addr
         * @static
         * @param {common.IIpv4Addr} message Ipv4Addr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ipv4Addr.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Ipv4Addr message from the specified reader or buffer.
         * @function decode
         * @memberof common.Ipv4Addr
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.Ipv4Addr} Ipv4Addr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ipv4Addr.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.Ipv4Addr();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.addr = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Ipv4Addr message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.Ipv4Addr
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.Ipv4Addr} Ipv4Addr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ipv4Addr.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Ipv4Addr message.
         * @function verify
         * @memberof common.Ipv4Addr
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Ipv4Addr.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.addr != null && message.hasOwnProperty("addr"))
                if (!$util.isInteger(message.addr))
                    return "addr: integer expected";
            return null;
        };

        /**
         * Creates an Ipv4Addr message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.Ipv4Addr
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.Ipv4Addr} Ipv4Addr
         */
        Ipv4Addr.fromObject = function fromObject(object) {
            if (object instanceof $root.common.Ipv4Addr)
                return object;
            let message = new $root.common.Ipv4Addr();
            if (object.addr != null)
                message.addr = object.addr >>> 0;
            return message;
        };

        /**
         * Creates a plain object from an Ipv4Addr message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.Ipv4Addr
         * @static
         * @param {common.Ipv4Addr} message Ipv4Addr
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Ipv4Addr.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.addr = 0;
            if (message.addr != null && message.hasOwnProperty("addr"))
                object.addr = message.addr;
            return object;
        };

        /**
         * Converts this Ipv4Addr to JSON.
         * @function toJSON
         * @memberof common.Ipv4Addr
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Ipv4Addr.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Ipv4Addr
         * @function getTypeUrl
         * @memberof common.Ipv4Addr
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Ipv4Addr.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.Ipv4Addr";
        };

        return Ipv4Addr;
    })();

    common.Ipv6Addr = (function() {

        /**
         * Properties of an Ipv6Addr.
         * @memberof common
         * @interface IIpv6Addr
         * @property {number|null} [part1] Ipv6Addr part1
         * @property {number|null} [part2] Ipv6Addr part2
         * @property {number|null} [part3] Ipv6Addr part3
         * @property {number|null} [part4] Ipv6Addr part4
         */

        /**
         * Constructs a new Ipv6Addr.
         * @memberof common
         * @classdesc Represents an Ipv6Addr.
         * @implements IIpv6Addr
         * @constructor
         * @param {common.IIpv6Addr=} [properties] Properties to set
         */
        function Ipv6Addr(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Ipv6Addr part1.
         * @member {number} part1
         * @memberof common.Ipv6Addr
         * @instance
         */
        Ipv6Addr.prototype.part1 = 0;

        /**
         * Ipv6Addr part2.
         * @member {number} part2
         * @memberof common.Ipv6Addr
         * @instance
         */
        Ipv6Addr.prototype.part2 = 0;

        /**
         * Ipv6Addr part3.
         * @member {number} part3
         * @memberof common.Ipv6Addr
         * @instance
         */
        Ipv6Addr.prototype.part3 = 0;

        /**
         * Ipv6Addr part4.
         * @member {number} part4
         * @memberof common.Ipv6Addr
         * @instance
         */
        Ipv6Addr.prototype.part4 = 0;

        /**
         * Creates a new Ipv6Addr instance using the specified properties.
         * @function create
         * @memberof common.Ipv6Addr
         * @static
         * @param {common.IIpv6Addr=} [properties] Properties to set
         * @returns {common.Ipv6Addr} Ipv6Addr instance
         */
        Ipv6Addr.create = function create(properties) {
            return new Ipv6Addr(properties);
        };

        /**
         * Encodes the specified Ipv6Addr message. Does not implicitly {@link common.Ipv6Addr.verify|verify} messages.
         * @function encode
         * @memberof common.Ipv6Addr
         * @static
         * @param {common.IIpv6Addr} message Ipv6Addr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ipv6Addr.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.part1 != null && Object.hasOwnProperty.call(message, "part1"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.part1);
            if (message.part2 != null && Object.hasOwnProperty.call(message, "part2"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.part2);
            if (message.part3 != null && Object.hasOwnProperty.call(message, "part3"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.part3);
            if (message.part4 != null && Object.hasOwnProperty.call(message, "part4"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.part4);
            return writer;
        };

        /**
         * Encodes the specified Ipv6Addr message, length delimited. Does not implicitly {@link common.Ipv6Addr.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.Ipv6Addr
         * @static
         * @param {common.IIpv6Addr} message Ipv6Addr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ipv6Addr.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Ipv6Addr message from the specified reader or buffer.
         * @function decode
         * @memberof common.Ipv6Addr
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.Ipv6Addr} Ipv6Addr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ipv6Addr.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.Ipv6Addr();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.part1 = reader.uint32();
                        break;
                    }
                case 2: {
                        message.part2 = reader.uint32();
                        break;
                    }
                case 3: {
                        message.part3 = reader.uint32();
                        break;
                    }
                case 4: {
                        message.part4 = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Ipv6Addr message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.Ipv6Addr
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.Ipv6Addr} Ipv6Addr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ipv6Addr.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Ipv6Addr message.
         * @function verify
         * @memberof common.Ipv6Addr
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Ipv6Addr.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.part1 != null && message.hasOwnProperty("part1"))
                if (!$util.isInteger(message.part1))
                    return "part1: integer expected";
            if (message.part2 != null && message.hasOwnProperty("part2"))
                if (!$util.isInteger(message.part2))
                    return "part2: integer expected";
            if (message.part3 != null && message.hasOwnProperty("part3"))
                if (!$util.isInteger(message.part3))
                    return "part3: integer expected";
            if (message.part4 != null && message.hasOwnProperty("part4"))
                if (!$util.isInteger(message.part4))
                    return "part4: integer expected";
            return null;
        };

        /**
         * Creates an Ipv6Addr message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.Ipv6Addr
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.Ipv6Addr} Ipv6Addr
         */
        Ipv6Addr.fromObject = function fromObject(object) {
            if (object instanceof $root.common.Ipv6Addr)
                return object;
            let message = new $root.common.Ipv6Addr();
            if (object.part1 != null)
                message.part1 = object.part1 >>> 0;
            if (object.part2 != null)
                message.part2 = object.part2 >>> 0;
            if (object.part3 != null)
                message.part3 = object.part3 >>> 0;
            if (object.part4 != null)
                message.part4 = object.part4 >>> 0;
            return message;
        };

        /**
         * Creates a plain object from an Ipv6Addr message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.Ipv6Addr
         * @static
         * @param {common.Ipv6Addr} message Ipv6Addr
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Ipv6Addr.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.part1 = 0;
                object.part2 = 0;
                object.part3 = 0;
                object.part4 = 0;
            }
            if (message.part1 != null && message.hasOwnProperty("part1"))
                object.part1 = message.part1;
            if (message.part2 != null && message.hasOwnProperty("part2"))
                object.part2 = message.part2;
            if (message.part3 != null && message.hasOwnProperty("part3"))
                object.part3 = message.part3;
            if (message.part4 != null && message.hasOwnProperty("part4"))
                object.part4 = message.part4;
            return object;
        };

        /**
         * Converts this Ipv6Addr to JSON.
         * @function toJSON
         * @memberof common.Ipv6Addr
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Ipv6Addr.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Ipv6Addr
         * @function getTypeUrl
         * @memberof common.Ipv6Addr
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Ipv6Addr.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.Ipv6Addr";
        };

        return Ipv6Addr;
    })();

    common.IpAddr = (function() {

        /**
         * Properties of an IpAddr.
         * @memberof common
         * @interface IIpAddr
         * @property {common.IIpv4Addr|null} [ipv4] IpAddr ipv4
         * @property {common.IIpv6Addr|null} [ipv6] IpAddr ipv6
         */

        /**
         * Constructs a new IpAddr.
         * @memberof common
         * @classdesc Represents an IpAddr.
         * @implements IIpAddr
         * @constructor
         * @param {common.IIpAddr=} [properties] Properties to set
         */
        function IpAddr(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * IpAddr ipv4.
         * @member {common.IIpv4Addr|null|undefined} ipv4
         * @memberof common.IpAddr
         * @instance
         */
        IpAddr.prototype.ipv4 = null;

        /**
         * IpAddr ipv6.
         * @member {common.IIpv6Addr|null|undefined} ipv6
         * @memberof common.IpAddr
         * @instance
         */
        IpAddr.prototype.ipv6 = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * IpAddr ip.
         * @member {"ipv4"|"ipv6"|undefined} ip
         * @memberof common.IpAddr
         * @instance
         */
        Object.defineProperty(IpAddr.prototype, "ip", {
            get: $util.oneOfGetter($oneOfFields = ["ipv4", "ipv6"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new IpAddr instance using the specified properties.
         * @function create
         * @memberof common.IpAddr
         * @static
         * @param {common.IIpAddr=} [properties] Properties to set
         * @returns {common.IpAddr} IpAddr instance
         */
        IpAddr.create = function create(properties) {
            return new IpAddr(properties);
        };

        /**
         * Encodes the specified IpAddr message. Does not implicitly {@link common.IpAddr.verify|verify} messages.
         * @function encode
         * @memberof common.IpAddr
         * @static
         * @param {common.IIpAddr} message IpAddr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IpAddr.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ipv4 != null && Object.hasOwnProperty.call(message, "ipv4"))
                $root.common.Ipv4Addr.encode(message.ipv4, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.ipv6 != null && Object.hasOwnProperty.call(message, "ipv6"))
                $root.common.Ipv6Addr.encode(message.ipv6, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified IpAddr message, length delimited. Does not implicitly {@link common.IpAddr.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.IpAddr
         * @static
         * @param {common.IIpAddr} message IpAddr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IpAddr.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an IpAddr message from the specified reader or buffer.
         * @function decode
         * @memberof common.IpAddr
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.IpAddr} IpAddr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IpAddr.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.IpAddr();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.ipv4 = $root.common.Ipv4Addr.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.ipv6 = $root.common.Ipv6Addr.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an IpAddr message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.IpAddr
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.IpAddr} IpAddr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IpAddr.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an IpAddr message.
         * @function verify
         * @memberof common.IpAddr
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        IpAddr.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.ipv4 != null && message.hasOwnProperty("ipv4")) {
                properties.ip = 1;
                {
                    let error = $root.common.Ipv4Addr.verify(message.ipv4);
                    if (error)
                        return "ipv4." + error;
                }
            }
            if (message.ipv6 != null && message.hasOwnProperty("ipv6")) {
                if (properties.ip === 1)
                    return "ip: multiple values";
                properties.ip = 1;
                {
                    let error = $root.common.Ipv6Addr.verify(message.ipv6);
                    if (error)
                        return "ipv6." + error;
                }
            }
            return null;
        };

        /**
         * Creates an IpAddr message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.IpAddr
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.IpAddr} IpAddr
         */
        IpAddr.fromObject = function fromObject(object) {
            if (object instanceof $root.common.IpAddr)
                return object;
            let message = new $root.common.IpAddr();
            if (object.ipv4 != null) {
                if (typeof object.ipv4 !== "object")
                    throw TypeError(".common.IpAddr.ipv4: object expected");
                message.ipv4 = $root.common.Ipv4Addr.fromObject(object.ipv4);
            }
            if (object.ipv6 != null) {
                if (typeof object.ipv6 !== "object")
                    throw TypeError(".common.IpAddr.ipv6: object expected");
                message.ipv6 = $root.common.Ipv6Addr.fromObject(object.ipv6);
            }
            return message;
        };

        /**
         * Creates a plain object from an IpAddr message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.IpAddr
         * @static
         * @param {common.IpAddr} message IpAddr
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        IpAddr.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.ipv4 != null && message.hasOwnProperty("ipv4")) {
                object.ipv4 = $root.common.Ipv4Addr.toObject(message.ipv4, options);
                if (options.oneofs)
                    object.ip = "ipv4";
            }
            if (message.ipv6 != null && message.hasOwnProperty("ipv6")) {
                object.ipv6 = $root.common.Ipv6Addr.toObject(message.ipv6, options);
                if (options.oneofs)
                    object.ip = "ipv6";
            }
            return object;
        };

        /**
         * Converts this IpAddr to JSON.
         * @function toJSON
         * @memberof common.IpAddr
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        IpAddr.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for IpAddr
         * @function getTypeUrl
         * @memberof common.IpAddr
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        IpAddr.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.IpAddr";
        };

        return IpAddr;
    })();

    common.Ipv4Inet = (function() {

        /**
         * Properties of an Ipv4Inet.
         * @memberof common
         * @interface IIpv4Inet
         * @property {common.IIpv4Addr|null} [address] Ipv4Inet address
         * @property {number|null} [networkLength] Ipv4Inet networkLength
         */

        /**
         * Constructs a new Ipv4Inet.
         * @memberof common
         * @classdesc Represents an Ipv4Inet.
         * @implements IIpv4Inet
         * @constructor
         * @param {common.IIpv4Inet=} [properties] Properties to set
         */
        function Ipv4Inet(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Ipv4Inet address.
         * @member {common.IIpv4Addr|null|undefined} address
         * @memberof common.Ipv4Inet
         * @instance
         */
        Ipv4Inet.prototype.address = null;

        /**
         * Ipv4Inet networkLength.
         * @member {number} networkLength
         * @memberof common.Ipv4Inet
         * @instance
         */
        Ipv4Inet.prototype.networkLength = 0;

        /**
         * Creates a new Ipv4Inet instance using the specified properties.
         * @function create
         * @memberof common.Ipv4Inet
         * @static
         * @param {common.IIpv4Inet=} [properties] Properties to set
         * @returns {common.Ipv4Inet} Ipv4Inet instance
         */
        Ipv4Inet.create = function create(properties) {
            return new Ipv4Inet(properties);
        };

        /**
         * Encodes the specified Ipv4Inet message. Does not implicitly {@link common.Ipv4Inet.verify|verify} messages.
         * @function encode
         * @memberof common.Ipv4Inet
         * @static
         * @param {common.IIpv4Inet} message Ipv4Inet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ipv4Inet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.address != null && Object.hasOwnProperty.call(message, "address"))
                $root.common.Ipv4Addr.encode(message.address, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.networkLength != null && Object.hasOwnProperty.call(message, "networkLength"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.networkLength);
            return writer;
        };

        /**
         * Encodes the specified Ipv4Inet message, length delimited. Does not implicitly {@link common.Ipv4Inet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.Ipv4Inet
         * @static
         * @param {common.IIpv4Inet} message Ipv4Inet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ipv4Inet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Ipv4Inet message from the specified reader or buffer.
         * @function decode
         * @memberof common.Ipv4Inet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.Ipv4Inet} Ipv4Inet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ipv4Inet.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.Ipv4Inet();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.address = $root.common.Ipv4Addr.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.networkLength = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Ipv4Inet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.Ipv4Inet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.Ipv4Inet} Ipv4Inet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ipv4Inet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Ipv4Inet message.
         * @function verify
         * @memberof common.Ipv4Inet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Ipv4Inet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.address != null && message.hasOwnProperty("address")) {
                let error = $root.common.Ipv4Addr.verify(message.address);
                if (error)
                    return "address." + error;
            }
            if (message.networkLength != null && message.hasOwnProperty("networkLength"))
                if (!$util.isInteger(message.networkLength))
                    return "networkLength: integer expected";
            return null;
        };

        /**
         * Creates an Ipv4Inet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.Ipv4Inet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.Ipv4Inet} Ipv4Inet
         */
        Ipv4Inet.fromObject = function fromObject(object) {
            if (object instanceof $root.common.Ipv4Inet)
                return object;
            let message = new $root.common.Ipv4Inet();
            if (object.address != null) {
                if (typeof object.address !== "object")
                    throw TypeError(".common.Ipv4Inet.address: object expected");
                message.address = $root.common.Ipv4Addr.fromObject(object.address);
            }
            if (object.networkLength != null)
                message.networkLength = object.networkLength >>> 0;
            return message;
        };

        /**
         * Creates a plain object from an Ipv4Inet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.Ipv4Inet
         * @static
         * @param {common.Ipv4Inet} message Ipv4Inet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Ipv4Inet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.address = null;
                object.networkLength = 0;
            }
            if (message.address != null && message.hasOwnProperty("address"))
                object.address = $root.common.Ipv4Addr.toObject(message.address, options);
            if (message.networkLength != null && message.hasOwnProperty("networkLength"))
                object.networkLength = message.networkLength;
            return object;
        };

        /**
         * Converts this Ipv4Inet to JSON.
         * @function toJSON
         * @memberof common.Ipv4Inet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Ipv4Inet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Ipv4Inet
         * @function getTypeUrl
         * @memberof common.Ipv4Inet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Ipv4Inet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.Ipv4Inet";
        };

        return Ipv4Inet;
    })();

    common.Ipv6Inet = (function() {

        /**
         * Properties of an Ipv6Inet.
         * @memberof common
         * @interface IIpv6Inet
         * @property {common.IIpv6Addr|null} [address] Ipv6Inet address
         * @property {number|null} [networkLength] Ipv6Inet networkLength
         */

        /**
         * Constructs a new Ipv6Inet.
         * @memberof common
         * @classdesc Represents an Ipv6Inet.
         * @implements IIpv6Inet
         * @constructor
         * @param {common.IIpv6Inet=} [properties] Properties to set
         */
        function Ipv6Inet(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Ipv6Inet address.
         * @member {common.IIpv6Addr|null|undefined} address
         * @memberof common.Ipv6Inet
         * @instance
         */
        Ipv6Inet.prototype.address = null;

        /**
         * Ipv6Inet networkLength.
         * @member {number} networkLength
         * @memberof common.Ipv6Inet
         * @instance
         */
        Ipv6Inet.prototype.networkLength = 0;

        /**
         * Creates a new Ipv6Inet instance using the specified properties.
         * @function create
         * @memberof common.Ipv6Inet
         * @static
         * @param {common.IIpv6Inet=} [properties] Properties to set
         * @returns {common.Ipv6Inet} Ipv6Inet instance
         */
        Ipv6Inet.create = function create(properties) {
            return new Ipv6Inet(properties);
        };

        /**
         * Encodes the specified Ipv6Inet message. Does not implicitly {@link common.Ipv6Inet.verify|verify} messages.
         * @function encode
         * @memberof common.Ipv6Inet
         * @static
         * @param {common.IIpv6Inet} message Ipv6Inet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ipv6Inet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.address != null && Object.hasOwnProperty.call(message, "address"))
                $root.common.Ipv6Addr.encode(message.address, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.networkLength != null && Object.hasOwnProperty.call(message, "networkLength"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.networkLength);
            return writer;
        };

        /**
         * Encodes the specified Ipv6Inet message, length delimited. Does not implicitly {@link common.Ipv6Inet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.Ipv6Inet
         * @static
         * @param {common.IIpv6Inet} message Ipv6Inet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ipv6Inet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Ipv6Inet message from the specified reader or buffer.
         * @function decode
         * @memberof common.Ipv6Inet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.Ipv6Inet} Ipv6Inet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ipv6Inet.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.Ipv6Inet();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.address = $root.common.Ipv6Addr.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.networkLength = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Ipv6Inet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.Ipv6Inet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.Ipv6Inet} Ipv6Inet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ipv6Inet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Ipv6Inet message.
         * @function verify
         * @memberof common.Ipv6Inet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Ipv6Inet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.address != null && message.hasOwnProperty("address")) {
                let error = $root.common.Ipv6Addr.verify(message.address);
                if (error)
                    return "address." + error;
            }
            if (message.networkLength != null && message.hasOwnProperty("networkLength"))
                if (!$util.isInteger(message.networkLength))
                    return "networkLength: integer expected";
            return null;
        };

        /**
         * Creates an Ipv6Inet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.Ipv6Inet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.Ipv6Inet} Ipv6Inet
         */
        Ipv6Inet.fromObject = function fromObject(object) {
            if (object instanceof $root.common.Ipv6Inet)
                return object;
            let message = new $root.common.Ipv6Inet();
            if (object.address != null) {
                if (typeof object.address !== "object")
                    throw TypeError(".common.Ipv6Inet.address: object expected");
                message.address = $root.common.Ipv6Addr.fromObject(object.address);
            }
            if (object.networkLength != null)
                message.networkLength = object.networkLength >>> 0;
            return message;
        };

        /**
         * Creates a plain object from an Ipv6Inet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.Ipv6Inet
         * @static
         * @param {common.Ipv6Inet} message Ipv6Inet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Ipv6Inet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.address = null;
                object.networkLength = 0;
            }
            if (message.address != null && message.hasOwnProperty("address"))
                object.address = $root.common.Ipv6Addr.toObject(message.address, options);
            if (message.networkLength != null && message.hasOwnProperty("networkLength"))
                object.networkLength = message.networkLength;
            return object;
        };

        /**
         * Converts this Ipv6Inet to JSON.
         * @function toJSON
         * @memberof common.Ipv6Inet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Ipv6Inet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Ipv6Inet
         * @function getTypeUrl
         * @memberof common.Ipv6Inet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Ipv6Inet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.Ipv6Inet";
        };

        return Ipv6Inet;
    })();

    common.IpInet = (function() {

        /**
         * Properties of an IpInet.
         * @memberof common
         * @interface IIpInet
         * @property {common.IIpv4Inet|null} [ipv4] IpInet ipv4
         * @property {common.IIpv6Inet|null} [ipv6] IpInet ipv6
         */

        /**
         * Constructs a new IpInet.
         * @memberof common
         * @classdesc Represents an IpInet.
         * @implements IIpInet
         * @constructor
         * @param {common.IIpInet=} [properties] Properties to set
         */
        function IpInet(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * IpInet ipv4.
         * @member {common.IIpv4Inet|null|undefined} ipv4
         * @memberof common.IpInet
         * @instance
         */
        IpInet.prototype.ipv4 = null;

        /**
         * IpInet ipv6.
         * @member {common.IIpv6Inet|null|undefined} ipv6
         * @memberof common.IpInet
         * @instance
         */
        IpInet.prototype.ipv6 = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * IpInet ip.
         * @member {"ipv4"|"ipv6"|undefined} ip
         * @memberof common.IpInet
         * @instance
         */
        Object.defineProperty(IpInet.prototype, "ip", {
            get: $util.oneOfGetter($oneOfFields = ["ipv4", "ipv6"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new IpInet instance using the specified properties.
         * @function create
         * @memberof common.IpInet
         * @static
         * @param {common.IIpInet=} [properties] Properties to set
         * @returns {common.IpInet} IpInet instance
         */
        IpInet.create = function create(properties) {
            return new IpInet(properties);
        };

        /**
         * Encodes the specified IpInet message. Does not implicitly {@link common.IpInet.verify|verify} messages.
         * @function encode
         * @memberof common.IpInet
         * @static
         * @param {common.IIpInet} message IpInet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IpInet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ipv4 != null && Object.hasOwnProperty.call(message, "ipv4"))
                $root.common.Ipv4Inet.encode(message.ipv4, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.ipv6 != null && Object.hasOwnProperty.call(message, "ipv6"))
                $root.common.Ipv6Inet.encode(message.ipv6, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified IpInet message, length delimited. Does not implicitly {@link common.IpInet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.IpInet
         * @static
         * @param {common.IIpInet} message IpInet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IpInet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an IpInet message from the specified reader or buffer.
         * @function decode
         * @memberof common.IpInet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.IpInet} IpInet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IpInet.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.IpInet();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.ipv4 = $root.common.Ipv4Inet.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.ipv6 = $root.common.Ipv6Inet.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an IpInet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.IpInet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.IpInet} IpInet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IpInet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an IpInet message.
         * @function verify
         * @memberof common.IpInet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        IpInet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.ipv4 != null && message.hasOwnProperty("ipv4")) {
                properties.ip = 1;
                {
                    let error = $root.common.Ipv4Inet.verify(message.ipv4);
                    if (error)
                        return "ipv4." + error;
                }
            }
            if (message.ipv6 != null && message.hasOwnProperty("ipv6")) {
                if (properties.ip === 1)
                    return "ip: multiple values";
                properties.ip = 1;
                {
                    let error = $root.common.Ipv6Inet.verify(message.ipv6);
                    if (error)
                        return "ipv6." + error;
                }
            }
            return null;
        };

        /**
         * Creates an IpInet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.IpInet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.IpInet} IpInet
         */
        IpInet.fromObject = function fromObject(object) {
            if (object instanceof $root.common.IpInet)
                return object;
            let message = new $root.common.IpInet();
            if (object.ipv4 != null) {
                if (typeof object.ipv4 !== "object")
                    throw TypeError(".common.IpInet.ipv4: object expected");
                message.ipv4 = $root.common.Ipv4Inet.fromObject(object.ipv4);
            }
            if (object.ipv6 != null) {
                if (typeof object.ipv6 !== "object")
                    throw TypeError(".common.IpInet.ipv6: object expected");
                message.ipv6 = $root.common.Ipv6Inet.fromObject(object.ipv6);
            }
            return message;
        };

        /**
         * Creates a plain object from an IpInet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.IpInet
         * @static
         * @param {common.IpInet} message IpInet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        IpInet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.ipv4 != null && message.hasOwnProperty("ipv4")) {
                object.ipv4 = $root.common.Ipv4Inet.toObject(message.ipv4, options);
                if (options.oneofs)
                    object.ip = "ipv4";
            }
            if (message.ipv6 != null && message.hasOwnProperty("ipv6")) {
                object.ipv6 = $root.common.Ipv6Inet.toObject(message.ipv6, options);
                if (options.oneofs)
                    object.ip = "ipv6";
            }
            return object;
        };

        /**
         * Converts this IpInet to JSON.
         * @function toJSON
         * @memberof common.IpInet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        IpInet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for IpInet
         * @function getTypeUrl
         * @memberof common.IpInet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        IpInet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.IpInet";
        };

        return IpInet;
    })();

    common.Url = (function() {

        /**
         * Properties of an Url.
         * @memberof common
         * @interface IUrl
         * @property {string|null} [url] Url url
         */

        /**
         * Constructs a new Url.
         * @memberof common
         * @classdesc Represents an Url.
         * @implements IUrl
         * @constructor
         * @param {common.IUrl=} [properties] Properties to set
         */
        function Url(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Url url.
         * @member {string} url
         * @memberof common.Url
         * @instance
         */
        Url.prototype.url = "";

        /**
         * Creates a new Url instance using the specified properties.
         * @function create
         * @memberof common.Url
         * @static
         * @param {common.IUrl=} [properties] Properties to set
         * @returns {common.Url} Url instance
         */
        Url.create = function create(properties) {
            return new Url(properties);
        };

        /**
         * Encodes the specified Url message. Does not implicitly {@link common.Url.verify|verify} messages.
         * @function encode
         * @memberof common.Url
         * @static
         * @param {common.IUrl} message Url message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Url.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.url);
            return writer;
        };

        /**
         * Encodes the specified Url message, length delimited. Does not implicitly {@link common.Url.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.Url
         * @static
         * @param {common.IUrl} message Url message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Url.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Url message from the specified reader or buffer.
         * @function decode
         * @memberof common.Url
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.Url} Url
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Url.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.Url();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.url = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Url message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.Url
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.Url} Url
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Url.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Url message.
         * @function verify
         * @memberof common.Url
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Url.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            return null;
        };

        /**
         * Creates an Url message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.Url
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.Url} Url
         */
        Url.fromObject = function fromObject(object) {
            if (object instanceof $root.common.Url)
                return object;
            let message = new $root.common.Url();
            if (object.url != null)
                message.url = String(object.url);
            return message;
        };

        /**
         * Creates a plain object from an Url message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.Url
         * @static
         * @param {common.Url} message Url
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Url.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.url = "";
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            return object;
        };

        /**
         * Converts this Url to JSON.
         * @function toJSON
         * @memberof common.Url
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Url.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Url
         * @function getTypeUrl
         * @memberof common.Url
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Url.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.Url";
        };

        return Url;
    })();

    common.SocketAddr = (function() {

        /**
         * Properties of a SocketAddr.
         * @memberof common
         * @interface ISocketAddr
         * @property {common.IIpv4Addr|null} [ipv4] SocketAddr ipv4
         * @property {common.IIpv6Addr|null} [ipv6] SocketAddr ipv6
         * @property {number|null} [port] SocketAddr port
         */

        /**
         * Constructs a new SocketAddr.
         * @memberof common
         * @classdesc Represents a SocketAddr.
         * @implements ISocketAddr
         * @constructor
         * @param {common.ISocketAddr=} [properties] Properties to set
         */
        function SocketAddr(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SocketAddr ipv4.
         * @member {common.IIpv4Addr|null|undefined} ipv4
         * @memberof common.SocketAddr
         * @instance
         */
        SocketAddr.prototype.ipv4 = null;

        /**
         * SocketAddr ipv6.
         * @member {common.IIpv6Addr|null|undefined} ipv6
         * @memberof common.SocketAddr
         * @instance
         */
        SocketAddr.prototype.ipv6 = null;

        /**
         * SocketAddr port.
         * @member {number} port
         * @memberof common.SocketAddr
         * @instance
         */
        SocketAddr.prototype.port = 0;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * SocketAddr ip.
         * @member {"ipv4"|"ipv6"|undefined} ip
         * @memberof common.SocketAddr
         * @instance
         */
        Object.defineProperty(SocketAddr.prototype, "ip", {
            get: $util.oneOfGetter($oneOfFields = ["ipv4", "ipv6"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new SocketAddr instance using the specified properties.
         * @function create
         * @memberof common.SocketAddr
         * @static
         * @param {common.ISocketAddr=} [properties] Properties to set
         * @returns {common.SocketAddr} SocketAddr instance
         */
        SocketAddr.create = function create(properties) {
            return new SocketAddr(properties);
        };

        /**
         * Encodes the specified SocketAddr message. Does not implicitly {@link common.SocketAddr.verify|verify} messages.
         * @function encode
         * @memberof common.SocketAddr
         * @static
         * @param {common.ISocketAddr} message SocketAddr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SocketAddr.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ipv4 != null && Object.hasOwnProperty.call(message, "ipv4"))
                $root.common.Ipv4Addr.encode(message.ipv4, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.ipv6 != null && Object.hasOwnProperty.call(message, "ipv6"))
                $root.common.Ipv6Addr.encode(message.ipv6, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.port != null && Object.hasOwnProperty.call(message, "port"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.port);
            return writer;
        };

        /**
         * Encodes the specified SocketAddr message, length delimited. Does not implicitly {@link common.SocketAddr.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.SocketAddr
         * @static
         * @param {common.ISocketAddr} message SocketAddr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SocketAddr.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SocketAddr message from the specified reader or buffer.
         * @function decode
         * @memberof common.SocketAddr
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.SocketAddr} SocketAddr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SocketAddr.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.SocketAddr();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.ipv4 = $root.common.Ipv4Addr.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.ipv6 = $root.common.Ipv6Addr.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.port = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SocketAddr message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.SocketAddr
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.SocketAddr} SocketAddr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SocketAddr.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SocketAddr message.
         * @function verify
         * @memberof common.SocketAddr
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SocketAddr.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.ipv4 != null && message.hasOwnProperty("ipv4")) {
                properties.ip = 1;
                {
                    let error = $root.common.Ipv4Addr.verify(message.ipv4);
                    if (error)
                        return "ipv4." + error;
                }
            }
            if (message.ipv6 != null && message.hasOwnProperty("ipv6")) {
                if (properties.ip === 1)
                    return "ip: multiple values";
                properties.ip = 1;
                {
                    let error = $root.common.Ipv6Addr.verify(message.ipv6);
                    if (error)
                        return "ipv6." + error;
                }
            }
            if (message.port != null && message.hasOwnProperty("port"))
                if (!$util.isInteger(message.port))
                    return "port: integer expected";
            return null;
        };

        /**
         * Creates a SocketAddr message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.SocketAddr
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.SocketAddr} SocketAddr
         */
        SocketAddr.fromObject = function fromObject(object) {
            if (object instanceof $root.common.SocketAddr)
                return object;
            let message = new $root.common.SocketAddr();
            if (object.ipv4 != null) {
                if (typeof object.ipv4 !== "object")
                    throw TypeError(".common.SocketAddr.ipv4: object expected");
                message.ipv4 = $root.common.Ipv4Addr.fromObject(object.ipv4);
            }
            if (object.ipv6 != null) {
                if (typeof object.ipv6 !== "object")
                    throw TypeError(".common.SocketAddr.ipv6: object expected");
                message.ipv6 = $root.common.Ipv6Addr.fromObject(object.ipv6);
            }
            if (object.port != null)
                message.port = object.port >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a SocketAddr message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.SocketAddr
         * @static
         * @param {common.SocketAddr} message SocketAddr
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SocketAddr.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.port = 0;
            if (message.ipv4 != null && message.hasOwnProperty("ipv4")) {
                object.ipv4 = $root.common.Ipv4Addr.toObject(message.ipv4, options);
                if (options.oneofs)
                    object.ip = "ipv4";
            }
            if (message.ipv6 != null && message.hasOwnProperty("ipv6")) {
                object.ipv6 = $root.common.Ipv6Addr.toObject(message.ipv6, options);
                if (options.oneofs)
                    object.ip = "ipv6";
            }
            if (message.port != null && message.hasOwnProperty("port"))
                object.port = message.port;
            return object;
        };

        /**
         * Converts this SocketAddr to JSON.
         * @function toJSON
         * @memberof common.SocketAddr
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SocketAddr.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SocketAddr
         * @function getTypeUrl
         * @memberof common.SocketAddr
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SocketAddr.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.SocketAddr";
        };

        return SocketAddr;
    })();

    common.TunnelInfo = (function() {

        /**
         * Properties of a TunnelInfo.
         * @memberof common
         * @interface ITunnelInfo
         * @property {string|null} [tunnelType] TunnelInfo tunnelType
         * @property {common.IUrl|null} [localAddr] TunnelInfo localAddr
         * @property {common.IUrl|null} [remoteAddr] TunnelInfo remoteAddr
         */

        /**
         * Constructs a new TunnelInfo.
         * @memberof common
         * @classdesc Represents a TunnelInfo.
         * @implements ITunnelInfo
         * @constructor
         * @param {common.ITunnelInfo=} [properties] Properties to set
         */
        function TunnelInfo(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TunnelInfo tunnelType.
         * @member {string} tunnelType
         * @memberof common.TunnelInfo
         * @instance
         */
        TunnelInfo.prototype.tunnelType = "";

        /**
         * TunnelInfo localAddr.
         * @member {common.IUrl|null|undefined} localAddr
         * @memberof common.TunnelInfo
         * @instance
         */
        TunnelInfo.prototype.localAddr = null;

        /**
         * TunnelInfo remoteAddr.
         * @member {common.IUrl|null|undefined} remoteAddr
         * @memberof common.TunnelInfo
         * @instance
         */
        TunnelInfo.prototype.remoteAddr = null;

        /**
         * Creates a new TunnelInfo instance using the specified properties.
         * @function create
         * @memberof common.TunnelInfo
         * @static
         * @param {common.ITunnelInfo=} [properties] Properties to set
         * @returns {common.TunnelInfo} TunnelInfo instance
         */
        TunnelInfo.create = function create(properties) {
            return new TunnelInfo(properties);
        };

        /**
         * Encodes the specified TunnelInfo message. Does not implicitly {@link common.TunnelInfo.verify|verify} messages.
         * @function encode
         * @memberof common.TunnelInfo
         * @static
         * @param {common.ITunnelInfo} message TunnelInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TunnelInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tunnelType != null && Object.hasOwnProperty.call(message, "tunnelType"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.tunnelType);
            if (message.localAddr != null && Object.hasOwnProperty.call(message, "localAddr"))
                $root.common.Url.encode(message.localAddr, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.remoteAddr != null && Object.hasOwnProperty.call(message, "remoteAddr"))
                $root.common.Url.encode(message.remoteAddr, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TunnelInfo message, length delimited. Does not implicitly {@link common.TunnelInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.TunnelInfo
         * @static
         * @param {common.ITunnelInfo} message TunnelInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TunnelInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TunnelInfo message from the specified reader or buffer.
         * @function decode
         * @memberof common.TunnelInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.TunnelInfo} TunnelInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TunnelInfo.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.TunnelInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.tunnelType = reader.string();
                        break;
                    }
                case 2: {
                        message.localAddr = $root.common.Url.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.remoteAddr = $root.common.Url.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TunnelInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.TunnelInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.TunnelInfo} TunnelInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TunnelInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TunnelInfo message.
         * @function verify
         * @memberof common.TunnelInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TunnelInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tunnelType != null && message.hasOwnProperty("tunnelType"))
                if (!$util.isString(message.tunnelType))
                    return "tunnelType: string expected";
            if (message.localAddr != null && message.hasOwnProperty("localAddr")) {
                let error = $root.common.Url.verify(message.localAddr);
                if (error)
                    return "localAddr." + error;
            }
            if (message.remoteAddr != null && message.hasOwnProperty("remoteAddr")) {
                let error = $root.common.Url.verify(message.remoteAddr);
                if (error)
                    return "remoteAddr." + error;
            }
            return null;
        };

        /**
         * Creates a TunnelInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.TunnelInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.TunnelInfo} TunnelInfo
         */
        TunnelInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.common.TunnelInfo)
                return object;
            let message = new $root.common.TunnelInfo();
            if (object.tunnelType != null)
                message.tunnelType = String(object.tunnelType);
            if (object.localAddr != null) {
                if (typeof object.localAddr !== "object")
                    throw TypeError(".common.TunnelInfo.localAddr: object expected");
                message.localAddr = $root.common.Url.fromObject(object.localAddr);
            }
            if (object.remoteAddr != null) {
                if (typeof object.remoteAddr !== "object")
                    throw TypeError(".common.TunnelInfo.remoteAddr: object expected");
                message.remoteAddr = $root.common.Url.fromObject(object.remoteAddr);
            }
            return message;
        };

        /**
         * Creates a plain object from a TunnelInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.TunnelInfo
         * @static
         * @param {common.TunnelInfo} message TunnelInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TunnelInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.tunnelType = "";
                object.localAddr = null;
                object.remoteAddr = null;
            }
            if (message.tunnelType != null && message.hasOwnProperty("tunnelType"))
                object.tunnelType = message.tunnelType;
            if (message.localAddr != null && message.hasOwnProperty("localAddr"))
                object.localAddr = $root.common.Url.toObject(message.localAddr, options);
            if (message.remoteAddr != null && message.hasOwnProperty("remoteAddr"))
                object.remoteAddr = $root.common.Url.toObject(message.remoteAddr, options);
            return object;
        };

        /**
         * Converts this TunnelInfo to JSON.
         * @function toJSON
         * @memberof common.TunnelInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TunnelInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TunnelInfo
         * @function getTypeUrl
         * @memberof common.TunnelInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TunnelInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.TunnelInfo";
        };

        return TunnelInfo;
    })();

    common.StunInfo = (function() {

        /**
         * Properties of a StunInfo.
         * @memberof common
         * @interface IStunInfo
         * @property {common.NatType|null} [udpNatType] StunInfo udpNatType
         * @property {common.NatType|null} [tcpNatType] StunInfo tcpNatType
         * @property {number|Long|null} [lastUpdateTime] StunInfo lastUpdateTime
         * @property {Array.<string>|null} [publicIp] StunInfo publicIp
         * @property {number|null} [minPort] StunInfo minPort
         * @property {number|null} [maxPort] StunInfo maxPort
         */

        /**
         * Constructs a new StunInfo.
         * @memberof common
         * @classdesc Represents a StunInfo.
         * @implements IStunInfo
         * @constructor
         * @param {common.IStunInfo=} [properties] Properties to set
         */
        function StunInfo(properties) {
            this.publicIp = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StunInfo udpNatType.
         * @member {common.NatType} udpNatType
         * @memberof common.StunInfo
         * @instance
         */
        StunInfo.prototype.udpNatType = 0;

        /**
         * StunInfo tcpNatType.
         * @member {common.NatType} tcpNatType
         * @memberof common.StunInfo
         * @instance
         */
        StunInfo.prototype.tcpNatType = 0;

        /**
         * StunInfo lastUpdateTime.
         * @member {number|Long} lastUpdateTime
         * @memberof common.StunInfo
         * @instance
         */
        StunInfo.prototype.lastUpdateTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * StunInfo publicIp.
         * @member {Array.<string>} publicIp
         * @memberof common.StunInfo
         * @instance
         */
        StunInfo.prototype.publicIp = $util.emptyArray;

        /**
         * StunInfo minPort.
         * @member {number} minPort
         * @memberof common.StunInfo
         * @instance
         */
        StunInfo.prototype.minPort = 0;

        /**
         * StunInfo maxPort.
         * @member {number} maxPort
         * @memberof common.StunInfo
         * @instance
         */
        StunInfo.prototype.maxPort = 0;

        /**
         * Creates a new StunInfo instance using the specified properties.
         * @function create
         * @memberof common.StunInfo
         * @static
         * @param {common.IStunInfo=} [properties] Properties to set
         * @returns {common.StunInfo} StunInfo instance
         */
        StunInfo.create = function create(properties) {
            return new StunInfo(properties);
        };

        /**
         * Encodes the specified StunInfo message. Does not implicitly {@link common.StunInfo.verify|verify} messages.
         * @function encode
         * @memberof common.StunInfo
         * @static
         * @param {common.IStunInfo} message StunInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StunInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.udpNatType != null && Object.hasOwnProperty.call(message, "udpNatType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.udpNatType);
            if (message.tcpNatType != null && Object.hasOwnProperty.call(message, "tcpNatType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.tcpNatType);
            if (message.lastUpdateTime != null && Object.hasOwnProperty.call(message, "lastUpdateTime"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.lastUpdateTime);
            if (message.publicIp != null && message.publicIp.length)
                for (let i = 0; i < message.publicIp.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.publicIp[i]);
            if (message.minPort != null && Object.hasOwnProperty.call(message, "minPort"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.minPort);
            if (message.maxPort != null && Object.hasOwnProperty.call(message, "maxPort"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.maxPort);
            return writer;
        };

        /**
         * Encodes the specified StunInfo message, length delimited. Does not implicitly {@link common.StunInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.StunInfo
         * @static
         * @param {common.IStunInfo} message StunInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StunInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StunInfo message from the specified reader or buffer.
         * @function decode
         * @memberof common.StunInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.StunInfo} StunInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StunInfo.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.StunInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.udpNatType = reader.int32();
                        break;
                    }
                case 2: {
                        message.tcpNatType = reader.int32();
                        break;
                    }
                case 3: {
                        message.lastUpdateTime = reader.int64();
                        break;
                    }
                case 4: {
                        if (!(message.publicIp && message.publicIp.length))
                            message.publicIp = [];
                        message.publicIp.push(reader.string());
                        break;
                    }
                case 5: {
                        message.minPort = reader.uint32();
                        break;
                    }
                case 6: {
                        message.maxPort = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StunInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.StunInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.StunInfo} StunInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StunInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StunInfo message.
         * @function verify
         * @memberof common.StunInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StunInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.udpNatType != null && message.hasOwnProperty("udpNatType"))
                switch (message.udpNatType) {
                default:
                    return "udpNatType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                    break;
                }
            if (message.tcpNatType != null && message.hasOwnProperty("tcpNatType"))
                switch (message.tcpNatType) {
                default:
                    return "tcpNatType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                    break;
                }
            if (message.lastUpdateTime != null && message.hasOwnProperty("lastUpdateTime"))
                if (!$util.isInteger(message.lastUpdateTime) && !(message.lastUpdateTime && $util.isInteger(message.lastUpdateTime.low) && $util.isInteger(message.lastUpdateTime.high)))
                    return "lastUpdateTime: integer|Long expected";
            if (message.publicIp != null && message.hasOwnProperty("publicIp")) {
                if (!Array.isArray(message.publicIp))
                    return "publicIp: array expected";
                for (let i = 0; i < message.publicIp.length; ++i)
                    if (!$util.isString(message.publicIp[i]))
                        return "publicIp: string[] expected";
            }
            if (message.minPort != null && message.hasOwnProperty("minPort"))
                if (!$util.isInteger(message.minPort))
                    return "minPort: integer expected";
            if (message.maxPort != null && message.hasOwnProperty("maxPort"))
                if (!$util.isInteger(message.maxPort))
                    return "maxPort: integer expected";
            return null;
        };

        /**
         * Creates a StunInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.StunInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.StunInfo} StunInfo
         */
        StunInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.common.StunInfo)
                return object;
            let message = new $root.common.StunInfo();
            switch (object.udpNatType) {
            default:
                if (typeof object.udpNatType === "number") {
                    message.udpNatType = object.udpNatType;
                    break;
                }
                break;
            case "Unknown":
            case 0:
                message.udpNatType = 0;
                break;
            case "OpenInternet":
            case 1:
                message.udpNatType = 1;
                break;
            case "NoPAT":
            case 2:
                message.udpNatType = 2;
                break;
            case "FullCone":
            case 3:
                message.udpNatType = 3;
                break;
            case "Restricted":
            case 4:
                message.udpNatType = 4;
                break;
            case "PortRestricted":
            case 5:
                message.udpNatType = 5;
                break;
            case "Symmetric":
            case 6:
                message.udpNatType = 6;
                break;
            case "SymUdpFirewall":
            case 7:
                message.udpNatType = 7;
                break;
            case "SymmetricEasyInc":
            case 8:
                message.udpNatType = 8;
                break;
            case "SymmetricEasyDec":
            case 9:
                message.udpNatType = 9;
                break;
            }
            switch (object.tcpNatType) {
            default:
                if (typeof object.tcpNatType === "number") {
                    message.tcpNatType = object.tcpNatType;
                    break;
                }
                break;
            case "Unknown":
            case 0:
                message.tcpNatType = 0;
                break;
            case "OpenInternet":
            case 1:
                message.tcpNatType = 1;
                break;
            case "NoPAT":
            case 2:
                message.tcpNatType = 2;
                break;
            case "FullCone":
            case 3:
                message.tcpNatType = 3;
                break;
            case "Restricted":
            case 4:
                message.tcpNatType = 4;
                break;
            case "PortRestricted":
            case 5:
                message.tcpNatType = 5;
                break;
            case "Symmetric":
            case 6:
                message.tcpNatType = 6;
                break;
            case "SymUdpFirewall":
            case 7:
                message.tcpNatType = 7;
                break;
            case "SymmetricEasyInc":
            case 8:
                message.tcpNatType = 8;
                break;
            case "SymmetricEasyDec":
            case 9:
                message.tcpNatType = 9;
                break;
            }
            if (object.lastUpdateTime != null)
                if ($util.Long)
                    (message.lastUpdateTime = $util.Long.fromValue(object.lastUpdateTime)).unsigned = false;
                else if (typeof object.lastUpdateTime === "string")
                    message.lastUpdateTime = parseInt(object.lastUpdateTime, 10);
                else if (typeof object.lastUpdateTime === "number")
                    message.lastUpdateTime = object.lastUpdateTime;
                else if (typeof object.lastUpdateTime === "object")
                    message.lastUpdateTime = new $util.LongBits(object.lastUpdateTime.low >>> 0, object.lastUpdateTime.high >>> 0).toNumber();
            if (object.publicIp) {
                if (!Array.isArray(object.publicIp))
                    throw TypeError(".common.StunInfo.publicIp: array expected");
                message.publicIp = [];
                for (let i = 0; i < object.publicIp.length; ++i)
                    message.publicIp[i] = String(object.publicIp[i]);
            }
            if (object.minPort != null)
                message.minPort = object.minPort >>> 0;
            if (object.maxPort != null)
                message.maxPort = object.maxPort >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a StunInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.StunInfo
         * @static
         * @param {common.StunInfo} message StunInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StunInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.publicIp = [];
            if (options.defaults) {
                object.udpNatType = options.enums === String ? "Unknown" : 0;
                object.tcpNatType = options.enums === String ? "Unknown" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.lastUpdateTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lastUpdateTime = options.longs === String ? "0" : 0;
                object.minPort = 0;
                object.maxPort = 0;
            }
            if (message.udpNatType != null && message.hasOwnProperty("udpNatType"))
                object.udpNatType = options.enums === String ? $root.common.NatType[message.udpNatType] === undefined ? message.udpNatType : $root.common.NatType[message.udpNatType] : message.udpNatType;
            if (message.tcpNatType != null && message.hasOwnProperty("tcpNatType"))
                object.tcpNatType = options.enums === String ? $root.common.NatType[message.tcpNatType] === undefined ? message.tcpNatType : $root.common.NatType[message.tcpNatType] : message.tcpNatType;
            if (message.lastUpdateTime != null && message.hasOwnProperty("lastUpdateTime"))
                if (typeof message.lastUpdateTime === "number")
                    object.lastUpdateTime = options.longs === String ? String(message.lastUpdateTime) : message.lastUpdateTime;
                else
                    object.lastUpdateTime = options.longs === String ? $util.Long.prototype.toString.call(message.lastUpdateTime) : options.longs === Number ? new $util.LongBits(message.lastUpdateTime.low >>> 0, message.lastUpdateTime.high >>> 0).toNumber() : message.lastUpdateTime;
            if (message.publicIp && message.publicIp.length) {
                object.publicIp = [];
                for (let j = 0; j < message.publicIp.length; ++j)
                    object.publicIp[j] = message.publicIp[j];
            }
            if (message.minPort != null && message.hasOwnProperty("minPort"))
                object.minPort = message.minPort;
            if (message.maxPort != null && message.hasOwnProperty("maxPort"))
                object.maxPort = message.maxPort;
            return object;
        };

        /**
         * Converts this StunInfo to JSON.
         * @function toJSON
         * @memberof common.StunInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StunInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for StunInfo
         * @function getTypeUrl
         * @memberof common.StunInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        StunInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.StunInfo";
        };

        return StunInfo;
    })();

    common.PeerFeatureFlag = (function() {

        /**
         * Properties of a PeerFeatureFlag.
         * @memberof common
         * @interface IPeerFeatureFlag
         * @property {boolean|null} [isPublicServer] PeerFeatureFlag isPublicServer
         * @property {boolean|null} [avoidRelayData] PeerFeatureFlag avoidRelayData
         * @property {boolean|null} [kcpInput] PeerFeatureFlag kcpInput
         * @property {boolean|null} [noRelayKcp] PeerFeatureFlag noRelayKcp
         */

        /**
         * Constructs a new PeerFeatureFlag.
         * @memberof common
         * @classdesc Represents a PeerFeatureFlag.
         * @implements IPeerFeatureFlag
         * @constructor
         * @param {common.IPeerFeatureFlag=} [properties] Properties to set
         */
        function PeerFeatureFlag(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PeerFeatureFlag isPublicServer.
         * @member {boolean} isPublicServer
         * @memberof common.PeerFeatureFlag
         * @instance
         */
        PeerFeatureFlag.prototype.isPublicServer = false;

        /**
         * PeerFeatureFlag avoidRelayData.
         * @member {boolean} avoidRelayData
         * @memberof common.PeerFeatureFlag
         * @instance
         */
        PeerFeatureFlag.prototype.avoidRelayData = false;

        /**
         * PeerFeatureFlag kcpInput.
         * @member {boolean} kcpInput
         * @memberof common.PeerFeatureFlag
         * @instance
         */
        PeerFeatureFlag.prototype.kcpInput = false;

        /**
         * PeerFeatureFlag noRelayKcp.
         * @member {boolean} noRelayKcp
         * @memberof common.PeerFeatureFlag
         * @instance
         */
        PeerFeatureFlag.prototype.noRelayKcp = false;

        /**
         * Creates a new PeerFeatureFlag instance using the specified properties.
         * @function create
         * @memberof common.PeerFeatureFlag
         * @static
         * @param {common.IPeerFeatureFlag=} [properties] Properties to set
         * @returns {common.PeerFeatureFlag} PeerFeatureFlag instance
         */
        PeerFeatureFlag.create = function create(properties) {
            return new PeerFeatureFlag(properties);
        };

        /**
         * Encodes the specified PeerFeatureFlag message. Does not implicitly {@link common.PeerFeatureFlag.verify|verify} messages.
         * @function encode
         * @memberof common.PeerFeatureFlag
         * @static
         * @param {common.IPeerFeatureFlag} message PeerFeatureFlag message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PeerFeatureFlag.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.isPublicServer != null && Object.hasOwnProperty.call(message, "isPublicServer"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isPublicServer);
            if (message.avoidRelayData != null && Object.hasOwnProperty.call(message, "avoidRelayData"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.avoidRelayData);
            if (message.kcpInput != null && Object.hasOwnProperty.call(message, "kcpInput"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.kcpInput);
            if (message.noRelayKcp != null && Object.hasOwnProperty.call(message, "noRelayKcp"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.noRelayKcp);
            return writer;
        };

        /**
         * Encodes the specified PeerFeatureFlag message, length delimited. Does not implicitly {@link common.PeerFeatureFlag.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.PeerFeatureFlag
         * @static
         * @param {common.IPeerFeatureFlag} message PeerFeatureFlag message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PeerFeatureFlag.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PeerFeatureFlag message from the specified reader or buffer.
         * @function decode
         * @memberof common.PeerFeatureFlag
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.PeerFeatureFlag} PeerFeatureFlag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PeerFeatureFlag.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.PeerFeatureFlag();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.isPublicServer = reader.bool();
                        break;
                    }
                case 2: {
                        message.avoidRelayData = reader.bool();
                        break;
                    }
                case 3: {
                        message.kcpInput = reader.bool();
                        break;
                    }
                case 4: {
                        message.noRelayKcp = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PeerFeatureFlag message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.PeerFeatureFlag
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.PeerFeatureFlag} PeerFeatureFlag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PeerFeatureFlag.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PeerFeatureFlag message.
         * @function verify
         * @memberof common.PeerFeatureFlag
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PeerFeatureFlag.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.isPublicServer != null && message.hasOwnProperty("isPublicServer"))
                if (typeof message.isPublicServer !== "boolean")
                    return "isPublicServer: boolean expected";
            if (message.avoidRelayData != null && message.hasOwnProperty("avoidRelayData"))
                if (typeof message.avoidRelayData !== "boolean")
                    return "avoidRelayData: boolean expected";
            if (message.kcpInput != null && message.hasOwnProperty("kcpInput"))
                if (typeof message.kcpInput !== "boolean")
                    return "kcpInput: boolean expected";
            if (message.noRelayKcp != null && message.hasOwnProperty("noRelayKcp"))
                if (typeof message.noRelayKcp !== "boolean")
                    return "noRelayKcp: boolean expected";
            return null;
        };

        /**
         * Creates a PeerFeatureFlag message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.PeerFeatureFlag
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.PeerFeatureFlag} PeerFeatureFlag
         */
        PeerFeatureFlag.fromObject = function fromObject(object) {
            if (object instanceof $root.common.PeerFeatureFlag)
                return object;
            let message = new $root.common.PeerFeatureFlag();
            if (object.isPublicServer != null)
                message.isPublicServer = Boolean(object.isPublicServer);
            if (object.avoidRelayData != null)
                message.avoidRelayData = Boolean(object.avoidRelayData);
            if (object.kcpInput != null)
                message.kcpInput = Boolean(object.kcpInput);
            if (object.noRelayKcp != null)
                message.noRelayKcp = Boolean(object.noRelayKcp);
            return message;
        };

        /**
         * Creates a plain object from a PeerFeatureFlag message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.PeerFeatureFlag
         * @static
         * @param {common.PeerFeatureFlag} message PeerFeatureFlag
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PeerFeatureFlag.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.isPublicServer = false;
                object.avoidRelayData = false;
                object.kcpInput = false;
                object.noRelayKcp = false;
            }
            if (message.isPublicServer != null && message.hasOwnProperty("isPublicServer"))
                object.isPublicServer = message.isPublicServer;
            if (message.avoidRelayData != null && message.hasOwnProperty("avoidRelayData"))
                object.avoidRelayData = message.avoidRelayData;
            if (message.kcpInput != null && message.hasOwnProperty("kcpInput"))
                object.kcpInput = message.kcpInput;
            if (message.noRelayKcp != null && message.hasOwnProperty("noRelayKcp"))
                object.noRelayKcp = message.noRelayKcp;
            return object;
        };

        /**
         * Converts this PeerFeatureFlag to JSON.
         * @function toJSON
         * @memberof common.PeerFeatureFlag
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PeerFeatureFlag.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PeerFeatureFlag
         * @function getTypeUrl
         * @memberof common.PeerFeatureFlag
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PeerFeatureFlag.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.PeerFeatureFlag";
        };

        return PeerFeatureFlag;
    })();

    /**
     * SocketType enum.
     * @name common.SocketType
     * @enum {number}
     * @property {number} TCP=0 TCP value
     * @property {number} UDP=1 UDP value
     */
    common.SocketType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "TCP"] = 0;
        values[valuesById[1] = "UDP"] = 1;
        return values;
    })();

    common.PortForwardConfigPb = (function() {

        /**
         * Properties of a PortForwardConfigPb.
         * @memberof common
         * @interface IPortForwardConfigPb
         * @property {common.ISocketAddr|null} [bindAddr] PortForwardConfigPb bindAddr
         * @property {common.ISocketAddr|null} [dstAddr] PortForwardConfigPb dstAddr
         * @property {common.SocketType|null} [socketType] PortForwardConfigPb socketType
         */

        /**
         * Constructs a new PortForwardConfigPb.
         * @memberof common
         * @classdesc Represents a PortForwardConfigPb.
         * @implements IPortForwardConfigPb
         * @constructor
         * @param {common.IPortForwardConfigPb=} [properties] Properties to set
         */
        function PortForwardConfigPb(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PortForwardConfigPb bindAddr.
         * @member {common.ISocketAddr|null|undefined} bindAddr
         * @memberof common.PortForwardConfigPb
         * @instance
         */
        PortForwardConfigPb.prototype.bindAddr = null;

        /**
         * PortForwardConfigPb dstAddr.
         * @member {common.ISocketAddr|null|undefined} dstAddr
         * @memberof common.PortForwardConfigPb
         * @instance
         */
        PortForwardConfigPb.prototype.dstAddr = null;

        /**
         * PortForwardConfigPb socketType.
         * @member {common.SocketType} socketType
         * @memberof common.PortForwardConfigPb
         * @instance
         */
        PortForwardConfigPb.prototype.socketType = 0;

        /**
         * Creates a new PortForwardConfigPb instance using the specified properties.
         * @function create
         * @memberof common.PortForwardConfigPb
         * @static
         * @param {common.IPortForwardConfigPb=} [properties] Properties to set
         * @returns {common.PortForwardConfigPb} PortForwardConfigPb instance
         */
        PortForwardConfigPb.create = function create(properties) {
            return new PortForwardConfigPb(properties);
        };

        /**
         * Encodes the specified PortForwardConfigPb message. Does not implicitly {@link common.PortForwardConfigPb.verify|verify} messages.
         * @function encode
         * @memberof common.PortForwardConfigPb
         * @static
         * @param {common.IPortForwardConfigPb} message PortForwardConfigPb message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PortForwardConfigPb.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.bindAddr != null && Object.hasOwnProperty.call(message, "bindAddr"))
                $root.common.SocketAddr.encode(message.bindAddr, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.dstAddr != null && Object.hasOwnProperty.call(message, "dstAddr"))
                $root.common.SocketAddr.encode(message.dstAddr, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.socketType != null && Object.hasOwnProperty.call(message, "socketType"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.socketType);
            return writer;
        };

        /**
         * Encodes the specified PortForwardConfigPb message, length delimited. Does not implicitly {@link common.PortForwardConfigPb.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.PortForwardConfigPb
         * @static
         * @param {common.IPortForwardConfigPb} message PortForwardConfigPb message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PortForwardConfigPb.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PortForwardConfigPb message from the specified reader or buffer.
         * @function decode
         * @memberof common.PortForwardConfigPb
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.PortForwardConfigPb} PortForwardConfigPb
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PortForwardConfigPb.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.PortForwardConfigPb();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.bindAddr = $root.common.SocketAddr.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.dstAddr = $root.common.SocketAddr.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.socketType = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PortForwardConfigPb message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.PortForwardConfigPb
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.PortForwardConfigPb} PortForwardConfigPb
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PortForwardConfigPb.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PortForwardConfigPb message.
         * @function verify
         * @memberof common.PortForwardConfigPb
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PortForwardConfigPb.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.bindAddr != null && message.hasOwnProperty("bindAddr")) {
                let error = $root.common.SocketAddr.verify(message.bindAddr);
                if (error)
                    return "bindAddr." + error;
            }
            if (message.dstAddr != null && message.hasOwnProperty("dstAddr")) {
                let error = $root.common.SocketAddr.verify(message.dstAddr);
                if (error)
                    return "dstAddr." + error;
            }
            if (message.socketType != null && message.hasOwnProperty("socketType"))
                switch (message.socketType) {
                default:
                    return "socketType: enum value expected";
                case 0:
                case 1:
                    break;
                }
            return null;
        };

        /**
         * Creates a PortForwardConfigPb message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.PortForwardConfigPb
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.PortForwardConfigPb} PortForwardConfigPb
         */
        PortForwardConfigPb.fromObject = function fromObject(object) {
            if (object instanceof $root.common.PortForwardConfigPb)
                return object;
            let message = new $root.common.PortForwardConfigPb();
            if (object.bindAddr != null) {
                if (typeof object.bindAddr !== "object")
                    throw TypeError(".common.PortForwardConfigPb.bindAddr: object expected");
                message.bindAddr = $root.common.SocketAddr.fromObject(object.bindAddr);
            }
            if (object.dstAddr != null) {
                if (typeof object.dstAddr !== "object")
                    throw TypeError(".common.PortForwardConfigPb.dstAddr: object expected");
                message.dstAddr = $root.common.SocketAddr.fromObject(object.dstAddr);
            }
            switch (object.socketType) {
            default:
                if (typeof object.socketType === "number") {
                    message.socketType = object.socketType;
                    break;
                }
                break;
            case "TCP":
            case 0:
                message.socketType = 0;
                break;
            case "UDP":
            case 1:
                message.socketType = 1;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a PortForwardConfigPb message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.PortForwardConfigPb
         * @static
         * @param {common.PortForwardConfigPb} message PortForwardConfigPb
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PortForwardConfigPb.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.bindAddr = null;
                object.dstAddr = null;
                object.socketType = options.enums === String ? "TCP" : 0;
            }
            if (message.bindAddr != null && message.hasOwnProperty("bindAddr"))
                object.bindAddr = $root.common.SocketAddr.toObject(message.bindAddr, options);
            if (message.dstAddr != null && message.hasOwnProperty("dstAddr"))
                object.dstAddr = $root.common.SocketAddr.toObject(message.dstAddr, options);
            if (message.socketType != null && message.hasOwnProperty("socketType"))
                object.socketType = options.enums === String ? $root.common.SocketType[message.socketType] === undefined ? message.socketType : $root.common.SocketType[message.socketType] : message.socketType;
            return object;
        };

        /**
         * Converts this PortForwardConfigPb to JSON.
         * @function toJSON
         * @memberof common.PortForwardConfigPb
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PortForwardConfigPb.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PortForwardConfigPb
         * @function getTypeUrl
         * @memberof common.PortForwardConfigPb
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PortForwardConfigPb.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.PortForwardConfigPb";
        };

        return PortForwardConfigPb;
    })();

    common.ProxyDstInfo = (function() {

        /**
         * Properties of a ProxyDstInfo.
         * @memberof common
         * @interface IProxyDstInfo
         * @property {common.ISocketAddr|null} [dstAddr] ProxyDstInfo dstAddr
         */

        /**
         * Constructs a new ProxyDstInfo.
         * @memberof common
         * @classdesc Represents a ProxyDstInfo.
         * @implements IProxyDstInfo
         * @constructor
         * @param {common.IProxyDstInfo=} [properties] Properties to set
         */
        function ProxyDstInfo(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ProxyDstInfo dstAddr.
         * @member {common.ISocketAddr|null|undefined} dstAddr
         * @memberof common.ProxyDstInfo
         * @instance
         */
        ProxyDstInfo.prototype.dstAddr = null;

        /**
         * Creates a new ProxyDstInfo instance using the specified properties.
         * @function create
         * @memberof common.ProxyDstInfo
         * @static
         * @param {common.IProxyDstInfo=} [properties] Properties to set
         * @returns {common.ProxyDstInfo} ProxyDstInfo instance
         */
        ProxyDstInfo.create = function create(properties) {
            return new ProxyDstInfo(properties);
        };

        /**
         * Encodes the specified ProxyDstInfo message. Does not implicitly {@link common.ProxyDstInfo.verify|verify} messages.
         * @function encode
         * @memberof common.ProxyDstInfo
         * @static
         * @param {common.IProxyDstInfo} message ProxyDstInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProxyDstInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.dstAddr != null && Object.hasOwnProperty.call(message, "dstAddr"))
                $root.common.SocketAddr.encode(message.dstAddr, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ProxyDstInfo message, length delimited. Does not implicitly {@link common.ProxyDstInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.ProxyDstInfo
         * @static
         * @param {common.IProxyDstInfo} message ProxyDstInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProxyDstInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ProxyDstInfo message from the specified reader or buffer.
         * @function decode
         * @memberof common.ProxyDstInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.ProxyDstInfo} ProxyDstInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProxyDstInfo.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.ProxyDstInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.dstAddr = $root.common.SocketAddr.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ProxyDstInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.ProxyDstInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.ProxyDstInfo} ProxyDstInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProxyDstInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ProxyDstInfo message.
         * @function verify
         * @memberof common.ProxyDstInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ProxyDstInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.dstAddr != null && message.hasOwnProperty("dstAddr")) {
                let error = $root.common.SocketAddr.verify(message.dstAddr);
                if (error)
                    return "dstAddr." + error;
            }
            return null;
        };

        /**
         * Creates a ProxyDstInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.ProxyDstInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.ProxyDstInfo} ProxyDstInfo
         */
        ProxyDstInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.common.ProxyDstInfo)
                return object;
            let message = new $root.common.ProxyDstInfo();
            if (object.dstAddr != null) {
                if (typeof object.dstAddr !== "object")
                    throw TypeError(".common.ProxyDstInfo.dstAddr: object expected");
                message.dstAddr = $root.common.SocketAddr.fromObject(object.dstAddr);
            }
            return message;
        };

        /**
         * Creates a plain object from a ProxyDstInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.ProxyDstInfo
         * @static
         * @param {common.ProxyDstInfo} message ProxyDstInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProxyDstInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.dstAddr = null;
            if (message.dstAddr != null && message.hasOwnProperty("dstAddr"))
                object.dstAddr = $root.common.SocketAddr.toObject(message.dstAddr, options);
            return object;
        };

        /**
         * Converts this ProxyDstInfo to JSON.
         * @function toJSON
         * @memberof common.ProxyDstInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProxyDstInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ProxyDstInfo
         * @function getTypeUrl
         * @memberof common.ProxyDstInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ProxyDstInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.ProxyDstInfo";
        };

        return ProxyDstInfo;
    })();

    common.LimiterConfig = (function() {

        /**
         * Properties of a LimiterConfig.
         * @memberof common
         * @interface ILimiterConfig
         * @property {number|Long|null} [burstRate] LimiterConfig burstRate
         * @property {number|Long|null} [bps] LimiterConfig bps
         * @property {number|Long|null} [fillDurationMs] LimiterConfig fillDurationMs
         */

        /**
         * Constructs a new LimiterConfig.
         * @memberof common
         * @classdesc Represents a LimiterConfig.
         * @implements ILimiterConfig
         * @constructor
         * @param {common.ILimiterConfig=} [properties] Properties to set
         */
        function LimiterConfig(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LimiterConfig burstRate.
         * @member {number|Long|null|undefined} burstRate
         * @memberof common.LimiterConfig
         * @instance
         */
        LimiterConfig.prototype.burstRate = null;

        /**
         * LimiterConfig bps.
         * @member {number|Long|null|undefined} bps
         * @memberof common.LimiterConfig
         * @instance
         */
        LimiterConfig.prototype.bps = null;

        /**
         * LimiterConfig fillDurationMs.
         * @member {number|Long|null|undefined} fillDurationMs
         * @memberof common.LimiterConfig
         * @instance
         */
        LimiterConfig.prototype.fillDurationMs = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(LimiterConfig.prototype, "_burstRate", {
            get: $util.oneOfGetter($oneOfFields = ["burstRate"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(LimiterConfig.prototype, "_bps", {
            get: $util.oneOfGetter($oneOfFields = ["bps"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(LimiterConfig.prototype, "_fillDurationMs", {
            get: $util.oneOfGetter($oneOfFields = ["fillDurationMs"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new LimiterConfig instance using the specified properties.
         * @function create
         * @memberof common.LimiterConfig
         * @static
         * @param {common.ILimiterConfig=} [properties] Properties to set
         * @returns {common.LimiterConfig} LimiterConfig instance
         */
        LimiterConfig.create = function create(properties) {
            return new LimiterConfig(properties);
        };

        /**
         * Encodes the specified LimiterConfig message. Does not implicitly {@link common.LimiterConfig.verify|verify} messages.
         * @function encode
         * @memberof common.LimiterConfig
         * @static
         * @param {common.ILimiterConfig} message LimiterConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LimiterConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.burstRate != null && Object.hasOwnProperty.call(message, "burstRate"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.burstRate);
            if (message.bps != null && Object.hasOwnProperty.call(message, "bps"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.bps);
            if (message.fillDurationMs != null && Object.hasOwnProperty.call(message, "fillDurationMs"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.fillDurationMs);
            return writer;
        };

        /**
         * Encodes the specified LimiterConfig message, length delimited. Does not implicitly {@link common.LimiterConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.LimiterConfig
         * @static
         * @param {common.ILimiterConfig} message LimiterConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LimiterConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LimiterConfig message from the specified reader or buffer.
         * @function decode
         * @memberof common.LimiterConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.LimiterConfig} LimiterConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LimiterConfig.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.LimiterConfig();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.burstRate = reader.uint64();
                        break;
                    }
                case 2: {
                        message.bps = reader.uint64();
                        break;
                    }
                case 3: {
                        message.fillDurationMs = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LimiterConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.LimiterConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.LimiterConfig} LimiterConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LimiterConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LimiterConfig message.
         * @function verify
         * @memberof common.LimiterConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LimiterConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.burstRate != null && message.hasOwnProperty("burstRate")) {
                properties._burstRate = 1;
                if (!$util.isInteger(message.burstRate) && !(message.burstRate && $util.isInteger(message.burstRate.low) && $util.isInteger(message.burstRate.high)))
                    return "burstRate: integer|Long expected";
            }
            if (message.bps != null && message.hasOwnProperty("bps")) {
                properties._bps = 1;
                if (!$util.isInteger(message.bps) && !(message.bps && $util.isInteger(message.bps.low) && $util.isInteger(message.bps.high)))
                    return "bps: integer|Long expected";
            }
            if (message.fillDurationMs != null && message.hasOwnProperty("fillDurationMs")) {
                properties._fillDurationMs = 1;
                if (!$util.isInteger(message.fillDurationMs) && !(message.fillDurationMs && $util.isInteger(message.fillDurationMs.low) && $util.isInteger(message.fillDurationMs.high)))
                    return "fillDurationMs: integer|Long expected";
            }
            return null;
        };

        /**
         * Creates a LimiterConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.LimiterConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.LimiterConfig} LimiterConfig
         */
        LimiterConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.common.LimiterConfig)
                return object;
            let message = new $root.common.LimiterConfig();
            if (object.burstRate != null)
                if ($util.Long)
                    (message.burstRate = $util.Long.fromValue(object.burstRate)).unsigned = true;
                else if (typeof object.burstRate === "string")
                    message.burstRate = parseInt(object.burstRate, 10);
                else if (typeof object.burstRate === "number")
                    message.burstRate = object.burstRate;
                else if (typeof object.burstRate === "object")
                    message.burstRate = new $util.LongBits(object.burstRate.low >>> 0, object.burstRate.high >>> 0).toNumber(true);
            if (object.bps != null)
                if ($util.Long)
                    (message.bps = $util.Long.fromValue(object.bps)).unsigned = true;
                else if (typeof object.bps === "string")
                    message.bps = parseInt(object.bps, 10);
                else if (typeof object.bps === "number")
                    message.bps = object.bps;
                else if (typeof object.bps === "object")
                    message.bps = new $util.LongBits(object.bps.low >>> 0, object.bps.high >>> 0).toNumber(true);
            if (object.fillDurationMs != null)
                if ($util.Long)
                    (message.fillDurationMs = $util.Long.fromValue(object.fillDurationMs)).unsigned = true;
                else if (typeof object.fillDurationMs === "string")
                    message.fillDurationMs = parseInt(object.fillDurationMs, 10);
                else if (typeof object.fillDurationMs === "number")
                    message.fillDurationMs = object.fillDurationMs;
                else if (typeof object.fillDurationMs === "object")
                    message.fillDurationMs = new $util.LongBits(object.fillDurationMs.low >>> 0, object.fillDurationMs.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a LimiterConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.LimiterConfig
         * @static
         * @param {common.LimiterConfig} message LimiterConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LimiterConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.burstRate != null && message.hasOwnProperty("burstRate")) {
                if (typeof message.burstRate === "number")
                    object.burstRate = options.longs === String ? String(message.burstRate) : message.burstRate;
                else
                    object.burstRate = options.longs === String ? $util.Long.prototype.toString.call(message.burstRate) : options.longs === Number ? new $util.LongBits(message.burstRate.low >>> 0, message.burstRate.high >>> 0).toNumber(true) : message.burstRate;
                if (options.oneofs)
                    object._burstRate = "burstRate";
            }
            if (message.bps != null && message.hasOwnProperty("bps")) {
                if (typeof message.bps === "number")
                    object.bps = options.longs === String ? String(message.bps) : message.bps;
                else
                    object.bps = options.longs === String ? $util.Long.prototype.toString.call(message.bps) : options.longs === Number ? new $util.LongBits(message.bps.low >>> 0, message.bps.high >>> 0).toNumber(true) : message.bps;
                if (options.oneofs)
                    object._bps = "bps";
            }
            if (message.fillDurationMs != null && message.hasOwnProperty("fillDurationMs")) {
                if (typeof message.fillDurationMs === "number")
                    object.fillDurationMs = options.longs === String ? String(message.fillDurationMs) : message.fillDurationMs;
                else
                    object.fillDurationMs = options.longs === String ? $util.Long.prototype.toString.call(message.fillDurationMs) : options.longs === Number ? new $util.LongBits(message.fillDurationMs.low >>> 0, message.fillDurationMs.high >>> 0).toNumber(true) : message.fillDurationMs;
                if (options.oneofs)
                    object._fillDurationMs = "fillDurationMs";
            }
            return object;
        };

        /**
         * Converts this LimiterConfig to JSON.
         * @function toJSON
         * @memberof common.LimiterConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LimiterConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LimiterConfig
         * @function getTypeUrl
         * @memberof common.LimiterConfig
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LimiterConfig.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.LimiterConfig";
        };

        return LimiterConfig;
    })();

    return common;
})();

export const peer_rpc = $root.peer_rpc = (() => {

    /**
     * Namespace peer_rpc.
     * @exports peer_rpc
     * @namespace
     */
    const peer_rpc = {};

    peer_rpc.RoutePeerInfo = (function() {

        /**
         * Properties of a RoutePeerInfo.
         * @memberof peer_rpc
         * @interface IRoutePeerInfo
         * @property {number|null} [peerId] RoutePeerInfo peerId
         * @property {common.IUUID|null} [instId] RoutePeerInfo instId
         * @property {number|null} [cost] RoutePeerInfo cost
         * @property {common.IIpv4Addr|null} [ipv4Addr] RoutePeerInfo ipv4Addr
         * @property {Array.<string>|null} [proxyCidrs] RoutePeerInfo proxyCidrs
         * @property {string|null} [hostname] RoutePeerInfo hostname
         * @property {common.NatType|null} [udpStunInfo] RoutePeerInfo udpStunInfo
         * @property {google.protobuf.ITimestamp|null} [lastUpdate] RoutePeerInfo lastUpdate
         * @property {number|null} [version] RoutePeerInfo version
         * @property {string|null} [easytierVersion] RoutePeerInfo easytierVersion
         * @property {common.IPeerFeatureFlag|null} [featureFlag] RoutePeerInfo featureFlag
         * @property {number|Long|null} [peerRouteId] RoutePeerInfo peerRouteId
         * @property {number|null} [networkLength] RoutePeerInfo networkLength
         * @property {number|null} [quicPort] RoutePeerInfo quicPort
         * @property {common.IIpv6Inet|null} [ipv6Addr] RoutePeerInfo ipv6Addr
         * @property {Array.<peer_rpc.IPeerGroupInfo>|null} [groups] RoutePeerInfo groups
         */

        /**
         * Constructs a new RoutePeerInfo.
         * @memberof peer_rpc
         * @classdesc Represents a RoutePeerInfo.
         * @implements IRoutePeerInfo
         * @constructor
         * @param {peer_rpc.IRoutePeerInfo=} [properties] Properties to set
         */
        function RoutePeerInfo(properties) {
            this.proxyCidrs = [];
            this.groups = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoutePeerInfo peerId.
         * @member {number} peerId
         * @memberof peer_rpc.RoutePeerInfo
         * @instance
         */
        RoutePeerInfo.prototype.peerId = 0;

        /**
         * RoutePeerInfo instId.
         * @member {common.IUUID|null|undefined} instId
         * @memberof peer_rpc.RoutePeerInfo
         * @instance
         */
        RoutePeerInfo.prototype.instId = null;

        /**
         * RoutePeerInfo cost.
         * @member {number} cost
         * @memberof peer_rpc.RoutePeerInfo
         * @instance
         */
        RoutePeerInfo.prototype.cost = 0;

        /**
         * RoutePeerInfo ipv4Addr.
         * @member {common.IIpv4Addr|null|undefined} ipv4Addr
         * @memberof peer_rpc.RoutePeerInfo
         * @instance
         */
        RoutePeerInfo.prototype.ipv4Addr = null;

        /**
         * RoutePeerInfo proxyCidrs.
         * @member {Array.<string>} proxyCidrs
         * @memberof peer_rpc.RoutePeerInfo
         * @instance
         */
        RoutePeerInfo.prototype.proxyCidrs = $util.emptyArray;

        /**
         * RoutePeerInfo hostname.
         * @member {string|null|undefined} hostname
         * @memberof peer_rpc.RoutePeerInfo
         * @instance
         */
        RoutePeerInfo.prototype.hostname = null;

        /**
         * RoutePeerInfo udpStunInfo.
         * @member {common.NatType} udpStunInfo
         * @memberof peer_rpc.RoutePeerInfo
         * @instance
         */
        RoutePeerInfo.prototype.udpStunInfo = 0;

        /**
         * RoutePeerInfo lastUpdate.
         * @member {google.protobuf.ITimestamp|null|undefined} lastUpdate
         * @memberof peer_rpc.RoutePeerInfo
         * @instance
         */
        RoutePeerInfo.prototype.lastUpdate = null;

        /**
         * RoutePeerInfo version.
         * @member {number} version
         * @memberof peer_rpc.RoutePeerInfo
         * @instance
         */
        RoutePeerInfo.prototype.version = 0;

        /**
         * RoutePeerInfo easytierVersion.
         * @member {string} easytierVersion
         * @memberof peer_rpc.RoutePeerInfo
         * @instance
         */
        RoutePeerInfo.prototype.easytierVersion = "";

        /**
         * RoutePeerInfo featureFlag.
         * @member {common.IPeerFeatureFlag|null|undefined} featureFlag
         * @memberof peer_rpc.RoutePeerInfo
         * @instance
         */
        RoutePeerInfo.prototype.featureFlag = null;

        /**
         * RoutePeerInfo peerRouteId.
         * @member {number|Long} peerRouteId
         * @memberof peer_rpc.RoutePeerInfo
         * @instance
         */
        RoutePeerInfo.prototype.peerRouteId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * RoutePeerInfo networkLength.
         * @member {number} networkLength
         * @memberof peer_rpc.RoutePeerInfo
         * @instance
         */
        RoutePeerInfo.prototype.networkLength = 0;

        /**
         * RoutePeerInfo quicPort.
         * @member {number|null|undefined} quicPort
         * @memberof peer_rpc.RoutePeerInfo
         * @instance
         */
        RoutePeerInfo.prototype.quicPort = null;

        /**
         * RoutePeerInfo ipv6Addr.
         * @member {common.IIpv6Inet|null|undefined} ipv6Addr
         * @memberof peer_rpc.RoutePeerInfo
         * @instance
         */
        RoutePeerInfo.prototype.ipv6Addr = null;

        /**
         * RoutePeerInfo groups.
         * @member {Array.<peer_rpc.IPeerGroupInfo>} groups
         * @memberof peer_rpc.RoutePeerInfo
         * @instance
         */
        RoutePeerInfo.prototype.groups = $util.emptyArray;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(RoutePeerInfo.prototype, "_ipv4Addr", {
            get: $util.oneOfGetter($oneOfFields = ["ipv4Addr"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(RoutePeerInfo.prototype, "_hostname", {
            get: $util.oneOfGetter($oneOfFields = ["hostname"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(RoutePeerInfo.prototype, "_quicPort", {
            get: $util.oneOfGetter($oneOfFields = ["quicPort"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(RoutePeerInfo.prototype, "_ipv6Addr", {
            get: $util.oneOfGetter($oneOfFields = ["ipv6Addr"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new RoutePeerInfo instance using the specified properties.
         * @function create
         * @memberof peer_rpc.RoutePeerInfo
         * @static
         * @param {peer_rpc.IRoutePeerInfo=} [properties] Properties to set
         * @returns {peer_rpc.RoutePeerInfo} RoutePeerInfo instance
         */
        RoutePeerInfo.create = function create(properties) {
            return new RoutePeerInfo(properties);
        };

        /**
         * Encodes the specified RoutePeerInfo message. Does not implicitly {@link peer_rpc.RoutePeerInfo.verify|verify} messages.
         * @function encode
         * @memberof peer_rpc.RoutePeerInfo
         * @static
         * @param {peer_rpc.IRoutePeerInfo} message RoutePeerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoutePeerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.peerId != null && Object.hasOwnProperty.call(message, "peerId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.peerId);
            if (message.instId != null && Object.hasOwnProperty.call(message, "instId"))
                $root.common.UUID.encode(message.instId, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.cost != null && Object.hasOwnProperty.call(message, "cost"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.cost);
            if (message.ipv4Addr != null && Object.hasOwnProperty.call(message, "ipv4Addr"))
                $root.common.Ipv4Addr.encode(message.ipv4Addr, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.proxyCidrs != null && message.proxyCidrs.length)
                for (let i = 0; i < message.proxyCidrs.length; ++i)
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.proxyCidrs[i]);
            if (message.hostname != null && Object.hasOwnProperty.call(message, "hostname"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.hostname);
            if (message.udpStunInfo != null && Object.hasOwnProperty.call(message, "udpStunInfo"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.udpStunInfo);
            if (message.lastUpdate != null && Object.hasOwnProperty.call(message, "lastUpdate"))
                $root.google.protobuf.Timestamp.encode(message.lastUpdate, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.version);
            if (message.easytierVersion != null && Object.hasOwnProperty.call(message, "easytierVersion"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.easytierVersion);
            if (message.featureFlag != null && Object.hasOwnProperty.call(message, "featureFlag"))
                $root.common.PeerFeatureFlag.encode(message.featureFlag, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.peerRouteId != null && Object.hasOwnProperty.call(message, "peerRouteId"))
                writer.uint32(/* id 12, wireType 0 =*/96).uint64(message.peerRouteId);
            if (message.networkLength != null && Object.hasOwnProperty.call(message, "networkLength"))
                writer.uint32(/* id 13, wireType 0 =*/104).uint32(message.networkLength);
            if (message.quicPort != null && Object.hasOwnProperty.call(message, "quicPort"))
                writer.uint32(/* id 14, wireType 0 =*/112).uint32(message.quicPort);
            if (message.ipv6Addr != null && Object.hasOwnProperty.call(message, "ipv6Addr"))
                $root.common.Ipv6Inet.encode(message.ipv6Addr, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            if (message.groups != null && message.groups.length)
                for (let i = 0; i < message.groups.length; ++i)
                    $root.peer_rpc.PeerGroupInfo.encode(message.groups[i], writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RoutePeerInfo message, length delimited. Does not implicitly {@link peer_rpc.RoutePeerInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof peer_rpc.RoutePeerInfo
         * @static
         * @param {peer_rpc.IRoutePeerInfo} message RoutePeerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoutePeerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoutePeerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof peer_rpc.RoutePeerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {peer_rpc.RoutePeerInfo} RoutePeerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoutePeerInfo.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.peer_rpc.RoutePeerInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.peerId = reader.uint32();
                        break;
                    }
                case 2: {
                        message.instId = $root.common.UUID.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.cost = reader.uint32();
                        break;
                    }
                case 4: {
                        message.ipv4Addr = $root.common.Ipv4Addr.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        if (!(message.proxyCidrs && message.proxyCidrs.length))
                            message.proxyCidrs = [];
                        message.proxyCidrs.push(reader.string());
                        break;
                    }
                case 6: {
                        message.hostname = reader.string();
                        break;
                    }
                case 7: {
                        message.udpStunInfo = reader.int32();
                        break;
                    }
                case 8: {
                        message.lastUpdate = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                case 9: {
                        message.version = reader.uint32();
                        break;
                    }
                case 10: {
                        message.easytierVersion = reader.string();
                        break;
                    }
                case 11: {
                        message.featureFlag = $root.common.PeerFeatureFlag.decode(reader, reader.uint32());
                        break;
                    }
                case 12: {
                        message.peerRouteId = reader.uint64();
                        break;
                    }
                case 13: {
                        message.networkLength = reader.uint32();
                        break;
                    }
                case 14: {
                        message.quicPort = reader.uint32();
                        break;
                    }
                case 15: {
                        message.ipv6Addr = $root.common.Ipv6Inet.decode(reader, reader.uint32());
                        break;
                    }
                case 16: {
                        if (!(message.groups && message.groups.length))
                            message.groups = [];
                        message.groups.push($root.peer_rpc.PeerGroupInfo.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoutePeerInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof peer_rpc.RoutePeerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {peer_rpc.RoutePeerInfo} RoutePeerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoutePeerInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoutePeerInfo message.
         * @function verify
         * @memberof peer_rpc.RoutePeerInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoutePeerInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.peerId != null && message.hasOwnProperty("peerId"))
                if (!$util.isInteger(message.peerId))
                    return "peerId: integer expected";
            if (message.instId != null && message.hasOwnProperty("instId")) {
                let error = $root.common.UUID.verify(message.instId);
                if (error)
                    return "instId." + error;
            }
            if (message.cost != null && message.hasOwnProperty("cost"))
                if (!$util.isInteger(message.cost))
                    return "cost: integer expected";
            if (message.ipv4Addr != null && message.hasOwnProperty("ipv4Addr")) {
                properties._ipv4Addr = 1;
                {
                    let error = $root.common.Ipv4Addr.verify(message.ipv4Addr);
                    if (error)
                        return "ipv4Addr." + error;
                }
            }
            if (message.proxyCidrs != null && message.hasOwnProperty("proxyCidrs")) {
                if (!Array.isArray(message.proxyCidrs))
                    return "proxyCidrs: array expected";
                for (let i = 0; i < message.proxyCidrs.length; ++i)
                    if (!$util.isString(message.proxyCidrs[i]))
                        return "proxyCidrs: string[] expected";
            }
            if (message.hostname != null && message.hasOwnProperty("hostname")) {
                properties._hostname = 1;
                if (!$util.isString(message.hostname))
                    return "hostname: string expected";
            }
            if (message.udpStunInfo != null && message.hasOwnProperty("udpStunInfo"))
                switch (message.udpStunInfo) {
                default:
                    return "udpStunInfo: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                    break;
                }
            if (message.lastUpdate != null && message.hasOwnProperty("lastUpdate")) {
                let error = $root.google.protobuf.Timestamp.verify(message.lastUpdate);
                if (error)
                    return "lastUpdate." + error;
            }
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version))
                    return "version: integer expected";
            if (message.easytierVersion != null && message.hasOwnProperty("easytierVersion"))
                if (!$util.isString(message.easytierVersion))
                    return "easytierVersion: string expected";
            if (message.featureFlag != null && message.hasOwnProperty("featureFlag")) {
                let error = $root.common.PeerFeatureFlag.verify(message.featureFlag);
                if (error)
                    return "featureFlag." + error;
            }
            if (message.peerRouteId != null && message.hasOwnProperty("peerRouteId"))
                if (!$util.isInteger(message.peerRouteId) && !(message.peerRouteId && $util.isInteger(message.peerRouteId.low) && $util.isInteger(message.peerRouteId.high)))
                    return "peerRouteId: integer|Long expected";
            if (message.networkLength != null && message.hasOwnProperty("networkLength"))
                if (!$util.isInteger(message.networkLength))
                    return "networkLength: integer expected";
            if (message.quicPort != null && message.hasOwnProperty("quicPort")) {
                properties._quicPort = 1;
                if (!$util.isInteger(message.quicPort))
                    return "quicPort: integer expected";
            }
            if (message.ipv6Addr != null && message.hasOwnProperty("ipv6Addr")) {
                properties._ipv6Addr = 1;
                {
                    let error = $root.common.Ipv6Inet.verify(message.ipv6Addr);
                    if (error)
                        return "ipv6Addr." + error;
                }
            }
            if (message.groups != null && message.hasOwnProperty("groups")) {
                if (!Array.isArray(message.groups))
                    return "groups: array expected";
                for (let i = 0; i < message.groups.length; ++i) {
                    let error = $root.peer_rpc.PeerGroupInfo.verify(message.groups[i]);
                    if (error)
                        return "groups." + error;
                }
            }
            return null;
        };

        /**
         * Creates a RoutePeerInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof peer_rpc.RoutePeerInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {peer_rpc.RoutePeerInfo} RoutePeerInfo
         */
        RoutePeerInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.peer_rpc.RoutePeerInfo)
                return object;
            let message = new $root.peer_rpc.RoutePeerInfo();
            if (object.peerId != null)
                message.peerId = object.peerId >>> 0;
            if (object.instId != null) {
                if (typeof object.instId !== "object")
                    throw TypeError(".peer_rpc.RoutePeerInfo.instId: object expected");
                message.instId = $root.common.UUID.fromObject(object.instId);
            }
            if (object.cost != null)
                message.cost = object.cost >>> 0;
            if (object.ipv4Addr != null) {
                if (typeof object.ipv4Addr !== "object")
                    throw TypeError(".peer_rpc.RoutePeerInfo.ipv4Addr: object expected");
                message.ipv4Addr = $root.common.Ipv4Addr.fromObject(object.ipv4Addr);
            }
            if (object.proxyCidrs) {
                if (!Array.isArray(object.proxyCidrs))
                    throw TypeError(".peer_rpc.RoutePeerInfo.proxyCidrs: array expected");
                message.proxyCidrs = [];
                for (let i = 0; i < object.proxyCidrs.length; ++i)
                    message.proxyCidrs[i] = String(object.proxyCidrs[i]);
            }
            if (object.hostname != null)
                message.hostname = String(object.hostname);
            switch (object.udpStunInfo) {
            default:
                if (typeof object.udpStunInfo === "number") {
                    message.udpStunInfo = object.udpStunInfo;
                    break;
                }
                break;
            case "Unknown":
            case 0:
                message.udpStunInfo = 0;
                break;
            case "OpenInternet":
            case 1:
                message.udpStunInfo = 1;
                break;
            case "NoPAT":
            case 2:
                message.udpStunInfo = 2;
                break;
            case "FullCone":
            case 3:
                message.udpStunInfo = 3;
                break;
            case "Restricted":
            case 4:
                message.udpStunInfo = 4;
                break;
            case "PortRestricted":
            case 5:
                message.udpStunInfo = 5;
                break;
            case "Symmetric":
            case 6:
                message.udpStunInfo = 6;
                break;
            case "SymUdpFirewall":
            case 7:
                message.udpStunInfo = 7;
                break;
            case "SymmetricEasyInc":
            case 8:
                message.udpStunInfo = 8;
                break;
            case "SymmetricEasyDec":
            case 9:
                message.udpStunInfo = 9;
                break;
            }
            if (object.lastUpdate != null) {
                if (typeof object.lastUpdate !== "object")
                    throw TypeError(".peer_rpc.RoutePeerInfo.lastUpdate: object expected");
                message.lastUpdate = $root.google.protobuf.Timestamp.fromObject(object.lastUpdate);
            }
            if (object.version != null)
                message.version = object.version >>> 0;
            if (object.easytierVersion != null)
                message.easytierVersion = String(object.easytierVersion);
            if (object.featureFlag != null) {
                if (typeof object.featureFlag !== "object")
                    throw TypeError(".peer_rpc.RoutePeerInfo.featureFlag: object expected");
                message.featureFlag = $root.common.PeerFeatureFlag.fromObject(object.featureFlag);
            }
            if (object.peerRouteId != null)
                if ($util.Long)
                    (message.peerRouteId = $util.Long.fromValue(object.peerRouteId)).unsigned = true;
                else if (typeof object.peerRouteId === "string")
                    message.peerRouteId = parseInt(object.peerRouteId, 10);
                else if (typeof object.peerRouteId === "number")
                    message.peerRouteId = object.peerRouteId;
                else if (typeof object.peerRouteId === "object")
                    message.peerRouteId = new $util.LongBits(object.peerRouteId.low >>> 0, object.peerRouteId.high >>> 0).toNumber(true);
            if (object.networkLength != null)
                message.networkLength = object.networkLength >>> 0;
            if (object.quicPort != null)
                message.quicPort = object.quicPort >>> 0;
            if (object.ipv6Addr != null) {
                if (typeof object.ipv6Addr !== "object")
                    throw TypeError(".peer_rpc.RoutePeerInfo.ipv6Addr: object expected");
                message.ipv6Addr = $root.common.Ipv6Inet.fromObject(object.ipv6Addr);
            }
            if (object.groups) {
                if (!Array.isArray(object.groups))
                    throw TypeError(".peer_rpc.RoutePeerInfo.groups: array expected");
                message.groups = [];
                for (let i = 0; i < object.groups.length; ++i) {
                    if (typeof object.groups[i] !== "object")
                        throw TypeError(".peer_rpc.RoutePeerInfo.groups: object expected");
                    message.groups[i] = $root.peer_rpc.PeerGroupInfo.fromObject(object.groups[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a RoutePeerInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof peer_rpc.RoutePeerInfo
         * @static
         * @param {peer_rpc.RoutePeerInfo} message RoutePeerInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoutePeerInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.proxyCidrs = [];
                object.groups = [];
            }
            if (options.defaults) {
                object.peerId = 0;
                object.instId = null;
                object.cost = 0;
                object.udpStunInfo = options.enums === String ? "Unknown" : 0;
                object.lastUpdate = null;
                object.version = 0;
                object.easytierVersion = "";
                object.featureFlag = null;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.peerRouteId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.peerRouteId = options.longs === String ? "0" : 0;
                object.networkLength = 0;
            }
            if (message.peerId != null && message.hasOwnProperty("peerId"))
                object.peerId = message.peerId;
            if (message.instId != null && message.hasOwnProperty("instId"))
                object.instId = $root.common.UUID.toObject(message.instId, options);
            if (message.cost != null && message.hasOwnProperty("cost"))
                object.cost = message.cost;
            if (message.ipv4Addr != null && message.hasOwnProperty("ipv4Addr")) {
                object.ipv4Addr = $root.common.Ipv4Addr.toObject(message.ipv4Addr, options);
                if (options.oneofs)
                    object._ipv4Addr = "ipv4Addr";
            }
            if (message.proxyCidrs && message.proxyCidrs.length) {
                object.proxyCidrs = [];
                for (let j = 0; j < message.proxyCidrs.length; ++j)
                    object.proxyCidrs[j] = message.proxyCidrs[j];
            }
            if (message.hostname != null && message.hasOwnProperty("hostname")) {
                object.hostname = message.hostname;
                if (options.oneofs)
                    object._hostname = "hostname";
            }
            if (message.udpStunInfo != null && message.hasOwnProperty("udpStunInfo"))
                object.udpStunInfo = options.enums === String ? $root.common.NatType[message.udpStunInfo] === undefined ? message.udpStunInfo : $root.common.NatType[message.udpStunInfo] : message.udpStunInfo;
            if (message.lastUpdate != null && message.hasOwnProperty("lastUpdate"))
                object.lastUpdate = $root.google.protobuf.Timestamp.toObject(message.lastUpdate, options);
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            if (message.easytierVersion != null && message.hasOwnProperty("easytierVersion"))
                object.easytierVersion = message.easytierVersion;
            if (message.featureFlag != null && message.hasOwnProperty("featureFlag"))
                object.featureFlag = $root.common.PeerFeatureFlag.toObject(message.featureFlag, options);
            if (message.peerRouteId != null && message.hasOwnProperty("peerRouteId"))
                if (typeof message.peerRouteId === "number")
                    object.peerRouteId = options.longs === String ? String(message.peerRouteId) : message.peerRouteId;
                else
                    object.peerRouteId = options.longs === String ? $util.Long.prototype.toString.call(message.peerRouteId) : options.longs === Number ? new $util.LongBits(message.peerRouteId.low >>> 0, message.peerRouteId.high >>> 0).toNumber(true) : message.peerRouteId;
            if (message.networkLength != null && message.hasOwnProperty("networkLength"))
                object.networkLength = message.networkLength;
            if (message.quicPort != null && message.hasOwnProperty("quicPort")) {
                object.quicPort = message.quicPort;
                if (options.oneofs)
                    object._quicPort = "quicPort";
            }
            if (message.ipv6Addr != null && message.hasOwnProperty("ipv6Addr")) {
                object.ipv6Addr = $root.common.Ipv6Inet.toObject(message.ipv6Addr, options);
                if (options.oneofs)
                    object._ipv6Addr = "ipv6Addr";
            }
            if (message.groups && message.groups.length) {
                object.groups = [];
                for (let j = 0; j < message.groups.length; ++j)
                    object.groups[j] = $root.peer_rpc.PeerGroupInfo.toObject(message.groups[j], options);
            }
            return object;
        };

        /**
         * Converts this RoutePeerInfo to JSON.
         * @function toJSON
         * @memberof peer_rpc.RoutePeerInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoutePeerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RoutePeerInfo
         * @function getTypeUrl
         * @memberof peer_rpc.RoutePeerInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RoutePeerInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/peer_rpc.RoutePeerInfo";
        };

        return RoutePeerInfo;
    })();

    peer_rpc.PeerIdVersion = (function() {

        /**
         * Properties of a PeerIdVersion.
         * @memberof peer_rpc
         * @interface IPeerIdVersion
         * @property {number|null} [peerId] PeerIdVersion peerId
         * @property {number|null} [version] PeerIdVersion version
         */

        /**
         * Constructs a new PeerIdVersion.
         * @memberof peer_rpc
         * @classdesc Represents a PeerIdVersion.
         * @implements IPeerIdVersion
         * @constructor
         * @param {peer_rpc.IPeerIdVersion=} [properties] Properties to set
         */
        function PeerIdVersion(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PeerIdVersion peerId.
         * @member {number} peerId
         * @memberof peer_rpc.PeerIdVersion
         * @instance
         */
        PeerIdVersion.prototype.peerId = 0;

        /**
         * PeerIdVersion version.
         * @member {number} version
         * @memberof peer_rpc.PeerIdVersion
         * @instance
         */
        PeerIdVersion.prototype.version = 0;

        /**
         * Creates a new PeerIdVersion instance using the specified properties.
         * @function create
         * @memberof peer_rpc.PeerIdVersion
         * @static
         * @param {peer_rpc.IPeerIdVersion=} [properties] Properties to set
         * @returns {peer_rpc.PeerIdVersion} PeerIdVersion instance
         */
        PeerIdVersion.create = function create(properties) {
            return new PeerIdVersion(properties);
        };

        /**
         * Encodes the specified PeerIdVersion message. Does not implicitly {@link peer_rpc.PeerIdVersion.verify|verify} messages.
         * @function encode
         * @memberof peer_rpc.PeerIdVersion
         * @static
         * @param {peer_rpc.IPeerIdVersion} message PeerIdVersion message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PeerIdVersion.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.peerId != null && Object.hasOwnProperty.call(message, "peerId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.peerId);
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.version);
            return writer;
        };

        /**
         * Encodes the specified PeerIdVersion message, length delimited. Does not implicitly {@link peer_rpc.PeerIdVersion.verify|verify} messages.
         * @function encodeDelimited
         * @memberof peer_rpc.PeerIdVersion
         * @static
         * @param {peer_rpc.IPeerIdVersion} message PeerIdVersion message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PeerIdVersion.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PeerIdVersion message from the specified reader or buffer.
         * @function decode
         * @memberof peer_rpc.PeerIdVersion
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {peer_rpc.PeerIdVersion} PeerIdVersion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PeerIdVersion.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.peer_rpc.PeerIdVersion();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.peerId = reader.uint32();
                        break;
                    }
                case 2: {
                        message.version = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PeerIdVersion message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof peer_rpc.PeerIdVersion
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {peer_rpc.PeerIdVersion} PeerIdVersion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PeerIdVersion.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PeerIdVersion message.
         * @function verify
         * @memberof peer_rpc.PeerIdVersion
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PeerIdVersion.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.peerId != null && message.hasOwnProperty("peerId"))
                if (!$util.isInteger(message.peerId))
                    return "peerId: integer expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version))
                    return "version: integer expected";
            return null;
        };

        /**
         * Creates a PeerIdVersion message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof peer_rpc.PeerIdVersion
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {peer_rpc.PeerIdVersion} PeerIdVersion
         */
        PeerIdVersion.fromObject = function fromObject(object) {
            if (object instanceof $root.peer_rpc.PeerIdVersion)
                return object;
            let message = new $root.peer_rpc.PeerIdVersion();
            if (object.peerId != null)
                message.peerId = object.peerId >>> 0;
            if (object.version != null)
                message.version = object.version >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a PeerIdVersion message. Also converts values to other types if specified.
         * @function toObject
         * @memberof peer_rpc.PeerIdVersion
         * @static
         * @param {peer_rpc.PeerIdVersion} message PeerIdVersion
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PeerIdVersion.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.peerId = 0;
                object.version = 0;
            }
            if (message.peerId != null && message.hasOwnProperty("peerId"))
                object.peerId = message.peerId;
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            return object;
        };

        /**
         * Converts this PeerIdVersion to JSON.
         * @function toJSON
         * @memberof peer_rpc.PeerIdVersion
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PeerIdVersion.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PeerIdVersion
         * @function getTypeUrl
         * @memberof peer_rpc.PeerIdVersion
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PeerIdVersion.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/peer_rpc.PeerIdVersion";
        };

        return PeerIdVersion;
    })();

    peer_rpc.RouteConnBitmap = (function() {

        /**
         * Properties of a RouteConnBitmap.
         * @memberof peer_rpc
         * @interface IRouteConnBitmap
         * @property {Array.<peer_rpc.IPeerIdVersion>|null} [peerIds] RouteConnBitmap peerIds
         * @property {Uint8Array|null} [bitmap] RouteConnBitmap bitmap
         */

        /**
         * Constructs a new RouteConnBitmap.
         * @memberof peer_rpc
         * @classdesc Represents a RouteConnBitmap.
         * @implements IRouteConnBitmap
         * @constructor
         * @param {peer_rpc.IRouteConnBitmap=} [properties] Properties to set
         */
        function RouteConnBitmap(properties) {
            this.peerIds = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RouteConnBitmap peerIds.
         * @member {Array.<peer_rpc.IPeerIdVersion>} peerIds
         * @memberof peer_rpc.RouteConnBitmap
         * @instance
         */
        RouteConnBitmap.prototype.peerIds = $util.emptyArray;

        /**
         * RouteConnBitmap bitmap.
         * @member {Uint8Array} bitmap
         * @memberof peer_rpc.RouteConnBitmap
         * @instance
         */
        RouteConnBitmap.prototype.bitmap = $util.newBuffer([]);

        /**
         * Creates a new RouteConnBitmap instance using the specified properties.
         * @function create
         * @memberof peer_rpc.RouteConnBitmap
         * @static
         * @param {peer_rpc.IRouteConnBitmap=} [properties] Properties to set
         * @returns {peer_rpc.RouteConnBitmap} RouteConnBitmap instance
         */
        RouteConnBitmap.create = function create(properties) {
            return new RouteConnBitmap(properties);
        };

        /**
         * Encodes the specified RouteConnBitmap message. Does not implicitly {@link peer_rpc.RouteConnBitmap.verify|verify} messages.
         * @function encode
         * @memberof peer_rpc.RouteConnBitmap
         * @static
         * @param {peer_rpc.IRouteConnBitmap} message RouteConnBitmap message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RouteConnBitmap.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.peerIds != null && message.peerIds.length)
                for (let i = 0; i < message.peerIds.length; ++i)
                    $root.peer_rpc.PeerIdVersion.encode(message.peerIds[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.bitmap != null && Object.hasOwnProperty.call(message, "bitmap"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.bitmap);
            return writer;
        };

        /**
         * Encodes the specified RouteConnBitmap message, length delimited. Does not implicitly {@link peer_rpc.RouteConnBitmap.verify|verify} messages.
         * @function encodeDelimited
         * @memberof peer_rpc.RouteConnBitmap
         * @static
         * @param {peer_rpc.IRouteConnBitmap} message RouteConnBitmap message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RouteConnBitmap.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RouteConnBitmap message from the specified reader or buffer.
         * @function decode
         * @memberof peer_rpc.RouteConnBitmap
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {peer_rpc.RouteConnBitmap} RouteConnBitmap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RouteConnBitmap.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.peer_rpc.RouteConnBitmap();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.peerIds && message.peerIds.length))
                            message.peerIds = [];
                        message.peerIds.push($root.peer_rpc.PeerIdVersion.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        message.bitmap = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RouteConnBitmap message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof peer_rpc.RouteConnBitmap
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {peer_rpc.RouteConnBitmap} RouteConnBitmap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RouteConnBitmap.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RouteConnBitmap message.
         * @function verify
         * @memberof peer_rpc.RouteConnBitmap
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RouteConnBitmap.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.peerIds != null && message.hasOwnProperty("peerIds")) {
                if (!Array.isArray(message.peerIds))
                    return "peerIds: array expected";
                for (let i = 0; i < message.peerIds.length; ++i) {
                    let error = $root.peer_rpc.PeerIdVersion.verify(message.peerIds[i]);
                    if (error)
                        return "peerIds." + error;
                }
            }
            if (message.bitmap != null && message.hasOwnProperty("bitmap"))
                if (!(message.bitmap && typeof message.bitmap.length === "number" || $util.isString(message.bitmap)))
                    return "bitmap: buffer expected";
            return null;
        };

        /**
         * Creates a RouteConnBitmap message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof peer_rpc.RouteConnBitmap
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {peer_rpc.RouteConnBitmap} RouteConnBitmap
         */
        RouteConnBitmap.fromObject = function fromObject(object) {
            if (object instanceof $root.peer_rpc.RouteConnBitmap)
                return object;
            let message = new $root.peer_rpc.RouteConnBitmap();
            if (object.peerIds) {
                if (!Array.isArray(object.peerIds))
                    throw TypeError(".peer_rpc.RouteConnBitmap.peerIds: array expected");
                message.peerIds = [];
                for (let i = 0; i < object.peerIds.length; ++i) {
                    if (typeof object.peerIds[i] !== "object")
                        throw TypeError(".peer_rpc.RouteConnBitmap.peerIds: object expected");
                    message.peerIds[i] = $root.peer_rpc.PeerIdVersion.fromObject(object.peerIds[i]);
                }
            }
            if (object.bitmap != null)
                if (typeof object.bitmap === "string")
                    $util.base64.decode(object.bitmap, message.bitmap = $util.newBuffer($util.base64.length(object.bitmap)), 0);
                else if (object.bitmap.length >= 0)
                    message.bitmap = object.bitmap;
            return message;
        };

        /**
         * Creates a plain object from a RouteConnBitmap message. Also converts values to other types if specified.
         * @function toObject
         * @memberof peer_rpc.RouteConnBitmap
         * @static
         * @param {peer_rpc.RouteConnBitmap} message RouteConnBitmap
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RouteConnBitmap.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.peerIds = [];
            if (options.defaults)
                if (options.bytes === String)
                    object.bitmap = "";
                else {
                    object.bitmap = [];
                    if (options.bytes !== Array)
                        object.bitmap = $util.newBuffer(object.bitmap);
                }
            if (message.peerIds && message.peerIds.length) {
                object.peerIds = [];
                for (let j = 0; j < message.peerIds.length; ++j)
                    object.peerIds[j] = $root.peer_rpc.PeerIdVersion.toObject(message.peerIds[j], options);
            }
            if (message.bitmap != null && message.hasOwnProperty("bitmap"))
                object.bitmap = options.bytes === String ? $util.base64.encode(message.bitmap, 0, message.bitmap.length) : options.bytes === Array ? Array.prototype.slice.call(message.bitmap) : message.bitmap;
            return object;
        };

        /**
         * Converts this RouteConnBitmap to JSON.
         * @function toJSON
         * @memberof peer_rpc.RouteConnBitmap
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RouteConnBitmap.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RouteConnBitmap
         * @function getTypeUrl
         * @memberof peer_rpc.RouteConnBitmap
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RouteConnBitmap.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/peer_rpc.RouteConnBitmap";
        };

        return RouteConnBitmap;
    })();

    peer_rpc.RoutePeerInfos = (function() {

        /**
         * Properties of a RoutePeerInfos.
         * @memberof peer_rpc
         * @interface IRoutePeerInfos
         * @property {Array.<peer_rpc.IRoutePeerInfo>|null} [items] RoutePeerInfos items
         */

        /**
         * Constructs a new RoutePeerInfos.
         * @memberof peer_rpc
         * @classdesc Represents a RoutePeerInfos.
         * @implements IRoutePeerInfos
         * @constructor
         * @param {peer_rpc.IRoutePeerInfos=} [properties] Properties to set
         */
        function RoutePeerInfos(properties) {
            this.items = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoutePeerInfos items.
         * @member {Array.<peer_rpc.IRoutePeerInfo>} items
         * @memberof peer_rpc.RoutePeerInfos
         * @instance
         */
        RoutePeerInfos.prototype.items = $util.emptyArray;

        /**
         * Creates a new RoutePeerInfos instance using the specified properties.
         * @function create
         * @memberof peer_rpc.RoutePeerInfos
         * @static
         * @param {peer_rpc.IRoutePeerInfos=} [properties] Properties to set
         * @returns {peer_rpc.RoutePeerInfos} RoutePeerInfos instance
         */
        RoutePeerInfos.create = function create(properties) {
            return new RoutePeerInfos(properties);
        };

        /**
         * Encodes the specified RoutePeerInfos message. Does not implicitly {@link peer_rpc.RoutePeerInfos.verify|verify} messages.
         * @function encode
         * @memberof peer_rpc.RoutePeerInfos
         * @static
         * @param {peer_rpc.IRoutePeerInfos} message RoutePeerInfos message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoutePeerInfos.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.items != null && message.items.length)
                for (let i = 0; i < message.items.length; ++i)
                    $root.peer_rpc.RoutePeerInfo.encode(message.items[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RoutePeerInfos message, length delimited. Does not implicitly {@link peer_rpc.RoutePeerInfos.verify|verify} messages.
         * @function encodeDelimited
         * @memberof peer_rpc.RoutePeerInfos
         * @static
         * @param {peer_rpc.IRoutePeerInfos} message RoutePeerInfos message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoutePeerInfos.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoutePeerInfos message from the specified reader or buffer.
         * @function decode
         * @memberof peer_rpc.RoutePeerInfos
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {peer_rpc.RoutePeerInfos} RoutePeerInfos
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoutePeerInfos.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.peer_rpc.RoutePeerInfos();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.items && message.items.length))
                            message.items = [];
                        message.items.push($root.peer_rpc.RoutePeerInfo.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoutePeerInfos message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof peer_rpc.RoutePeerInfos
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {peer_rpc.RoutePeerInfos} RoutePeerInfos
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoutePeerInfos.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoutePeerInfos message.
         * @function verify
         * @memberof peer_rpc.RoutePeerInfos
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoutePeerInfos.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.items != null && message.hasOwnProperty("items")) {
                if (!Array.isArray(message.items))
                    return "items: array expected";
                for (let i = 0; i < message.items.length; ++i) {
                    let error = $root.peer_rpc.RoutePeerInfo.verify(message.items[i]);
                    if (error)
                        return "items." + error;
                }
            }
            return null;
        };

        /**
         * Creates a RoutePeerInfos message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof peer_rpc.RoutePeerInfos
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {peer_rpc.RoutePeerInfos} RoutePeerInfos
         */
        RoutePeerInfos.fromObject = function fromObject(object) {
            if (object instanceof $root.peer_rpc.RoutePeerInfos)
                return object;
            let message = new $root.peer_rpc.RoutePeerInfos();
            if (object.items) {
                if (!Array.isArray(object.items))
                    throw TypeError(".peer_rpc.RoutePeerInfos.items: array expected");
                message.items = [];
                for (let i = 0; i < object.items.length; ++i) {
                    if (typeof object.items[i] !== "object")
                        throw TypeError(".peer_rpc.RoutePeerInfos.items: object expected");
                    message.items[i] = $root.peer_rpc.RoutePeerInfo.fromObject(object.items[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a RoutePeerInfos message. Also converts values to other types if specified.
         * @function toObject
         * @memberof peer_rpc.RoutePeerInfos
         * @static
         * @param {peer_rpc.RoutePeerInfos} message RoutePeerInfos
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoutePeerInfos.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.items = [];
            if (message.items && message.items.length) {
                object.items = [];
                for (let j = 0; j < message.items.length; ++j)
                    object.items[j] = $root.peer_rpc.RoutePeerInfo.toObject(message.items[j], options);
            }
            return object;
        };

        /**
         * Converts this RoutePeerInfos to JSON.
         * @function toJSON
         * @memberof peer_rpc.RoutePeerInfos
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoutePeerInfos.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RoutePeerInfos
         * @function getTypeUrl
         * @memberof peer_rpc.RoutePeerInfos
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RoutePeerInfos.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/peer_rpc.RoutePeerInfos";
        };

        return RoutePeerInfos;
    })();

    peer_rpc.ForeignNetworkRouteInfoKey = (function() {

        /**
         * Properties of a ForeignNetworkRouteInfoKey.
         * @memberof peer_rpc
         * @interface IForeignNetworkRouteInfoKey
         * @property {number|null} [peerId] ForeignNetworkRouteInfoKey peerId
         * @property {string|null} [networkName] ForeignNetworkRouteInfoKey networkName
         */

        /**
         * Constructs a new ForeignNetworkRouteInfoKey.
         * @memberof peer_rpc
         * @classdesc Represents a ForeignNetworkRouteInfoKey.
         * @implements IForeignNetworkRouteInfoKey
         * @constructor
         * @param {peer_rpc.IForeignNetworkRouteInfoKey=} [properties] Properties to set
         */
        function ForeignNetworkRouteInfoKey(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ForeignNetworkRouteInfoKey peerId.
         * @member {number} peerId
         * @memberof peer_rpc.ForeignNetworkRouteInfoKey
         * @instance
         */
        ForeignNetworkRouteInfoKey.prototype.peerId = 0;

        /**
         * ForeignNetworkRouteInfoKey networkName.
         * @member {string} networkName
         * @memberof peer_rpc.ForeignNetworkRouteInfoKey
         * @instance
         */
        ForeignNetworkRouteInfoKey.prototype.networkName = "";

        /**
         * Creates a new ForeignNetworkRouteInfoKey instance using the specified properties.
         * @function create
         * @memberof peer_rpc.ForeignNetworkRouteInfoKey
         * @static
         * @param {peer_rpc.IForeignNetworkRouteInfoKey=} [properties] Properties to set
         * @returns {peer_rpc.ForeignNetworkRouteInfoKey} ForeignNetworkRouteInfoKey instance
         */
        ForeignNetworkRouteInfoKey.create = function create(properties) {
            return new ForeignNetworkRouteInfoKey(properties);
        };

        /**
         * Encodes the specified ForeignNetworkRouteInfoKey message. Does not implicitly {@link peer_rpc.ForeignNetworkRouteInfoKey.verify|verify} messages.
         * @function encode
         * @memberof peer_rpc.ForeignNetworkRouteInfoKey
         * @static
         * @param {peer_rpc.IForeignNetworkRouteInfoKey} message ForeignNetworkRouteInfoKey message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ForeignNetworkRouteInfoKey.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.peerId != null && Object.hasOwnProperty.call(message, "peerId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.peerId);
            if (message.networkName != null && Object.hasOwnProperty.call(message, "networkName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.networkName);
            return writer;
        };

        /**
         * Encodes the specified ForeignNetworkRouteInfoKey message, length delimited. Does not implicitly {@link peer_rpc.ForeignNetworkRouteInfoKey.verify|verify} messages.
         * @function encodeDelimited
         * @memberof peer_rpc.ForeignNetworkRouteInfoKey
         * @static
         * @param {peer_rpc.IForeignNetworkRouteInfoKey} message ForeignNetworkRouteInfoKey message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ForeignNetworkRouteInfoKey.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ForeignNetworkRouteInfoKey message from the specified reader or buffer.
         * @function decode
         * @memberof peer_rpc.ForeignNetworkRouteInfoKey
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {peer_rpc.ForeignNetworkRouteInfoKey} ForeignNetworkRouteInfoKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ForeignNetworkRouteInfoKey.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.peer_rpc.ForeignNetworkRouteInfoKey();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.peerId = reader.uint32();
                        break;
                    }
                case 2: {
                        message.networkName = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ForeignNetworkRouteInfoKey message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof peer_rpc.ForeignNetworkRouteInfoKey
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {peer_rpc.ForeignNetworkRouteInfoKey} ForeignNetworkRouteInfoKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ForeignNetworkRouteInfoKey.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ForeignNetworkRouteInfoKey message.
         * @function verify
         * @memberof peer_rpc.ForeignNetworkRouteInfoKey
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ForeignNetworkRouteInfoKey.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.peerId != null && message.hasOwnProperty("peerId"))
                if (!$util.isInteger(message.peerId))
                    return "peerId: integer expected";
            if (message.networkName != null && message.hasOwnProperty("networkName"))
                if (!$util.isString(message.networkName))
                    return "networkName: string expected";
            return null;
        };

        /**
         * Creates a ForeignNetworkRouteInfoKey message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof peer_rpc.ForeignNetworkRouteInfoKey
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {peer_rpc.ForeignNetworkRouteInfoKey} ForeignNetworkRouteInfoKey
         */
        ForeignNetworkRouteInfoKey.fromObject = function fromObject(object) {
            if (object instanceof $root.peer_rpc.ForeignNetworkRouteInfoKey)
                return object;
            let message = new $root.peer_rpc.ForeignNetworkRouteInfoKey();
            if (object.peerId != null)
                message.peerId = object.peerId >>> 0;
            if (object.networkName != null)
                message.networkName = String(object.networkName);
            return message;
        };

        /**
         * Creates a plain object from a ForeignNetworkRouteInfoKey message. Also converts values to other types if specified.
         * @function toObject
         * @memberof peer_rpc.ForeignNetworkRouteInfoKey
         * @static
         * @param {peer_rpc.ForeignNetworkRouteInfoKey} message ForeignNetworkRouteInfoKey
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ForeignNetworkRouteInfoKey.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.peerId = 0;
                object.networkName = "";
            }
            if (message.peerId != null && message.hasOwnProperty("peerId"))
                object.peerId = message.peerId;
            if (message.networkName != null && message.hasOwnProperty("networkName"))
                object.networkName = message.networkName;
            return object;
        };

        /**
         * Converts this ForeignNetworkRouteInfoKey to JSON.
         * @function toJSON
         * @memberof peer_rpc.ForeignNetworkRouteInfoKey
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ForeignNetworkRouteInfoKey.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ForeignNetworkRouteInfoKey
         * @function getTypeUrl
         * @memberof peer_rpc.ForeignNetworkRouteInfoKey
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ForeignNetworkRouteInfoKey.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/peer_rpc.ForeignNetworkRouteInfoKey";
        };

        return ForeignNetworkRouteInfoKey;
    })();

    peer_rpc.ForeignNetworkRouteInfoEntry = (function() {

        /**
         * Properties of a ForeignNetworkRouteInfoEntry.
         * @memberof peer_rpc
         * @interface IForeignNetworkRouteInfoEntry
         * @property {Array.<number>|null} [foreignPeerIds] ForeignNetworkRouteInfoEntry foreignPeerIds
         * @property {google.protobuf.ITimestamp|null} [lastUpdate] ForeignNetworkRouteInfoEntry lastUpdate
         * @property {number|null} [version] ForeignNetworkRouteInfoEntry version
         * @property {Uint8Array|null} [networkSecretDigest] ForeignNetworkRouteInfoEntry networkSecretDigest
         * @property {number|null} [myPeerIdForThisNetwork] ForeignNetworkRouteInfoEntry myPeerIdForThisNetwork
         */

        /**
         * Constructs a new ForeignNetworkRouteInfoEntry.
         * @memberof peer_rpc
         * @classdesc Represents a ForeignNetworkRouteInfoEntry.
         * @implements IForeignNetworkRouteInfoEntry
         * @constructor
         * @param {peer_rpc.IForeignNetworkRouteInfoEntry=} [properties] Properties to set
         */
        function ForeignNetworkRouteInfoEntry(properties) {
            this.foreignPeerIds = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ForeignNetworkRouteInfoEntry foreignPeerIds.
         * @member {Array.<number>} foreignPeerIds
         * @memberof peer_rpc.ForeignNetworkRouteInfoEntry
         * @instance
         */
        ForeignNetworkRouteInfoEntry.prototype.foreignPeerIds = $util.emptyArray;

        /**
         * ForeignNetworkRouteInfoEntry lastUpdate.
         * @member {google.protobuf.ITimestamp|null|undefined} lastUpdate
         * @memberof peer_rpc.ForeignNetworkRouteInfoEntry
         * @instance
         */
        ForeignNetworkRouteInfoEntry.prototype.lastUpdate = null;

        /**
         * ForeignNetworkRouteInfoEntry version.
         * @member {number} version
         * @memberof peer_rpc.ForeignNetworkRouteInfoEntry
         * @instance
         */
        ForeignNetworkRouteInfoEntry.prototype.version = 0;

        /**
         * ForeignNetworkRouteInfoEntry networkSecretDigest.
         * @member {Uint8Array} networkSecretDigest
         * @memberof peer_rpc.ForeignNetworkRouteInfoEntry
         * @instance
         */
        ForeignNetworkRouteInfoEntry.prototype.networkSecretDigest = $util.newBuffer([]);

        /**
         * ForeignNetworkRouteInfoEntry myPeerIdForThisNetwork.
         * @member {number} myPeerIdForThisNetwork
         * @memberof peer_rpc.ForeignNetworkRouteInfoEntry
         * @instance
         */
        ForeignNetworkRouteInfoEntry.prototype.myPeerIdForThisNetwork = 0;

        /**
         * Creates a new ForeignNetworkRouteInfoEntry instance using the specified properties.
         * @function create
         * @memberof peer_rpc.ForeignNetworkRouteInfoEntry
         * @static
         * @param {peer_rpc.IForeignNetworkRouteInfoEntry=} [properties] Properties to set
         * @returns {peer_rpc.ForeignNetworkRouteInfoEntry} ForeignNetworkRouteInfoEntry instance
         */
        ForeignNetworkRouteInfoEntry.create = function create(properties) {
            return new ForeignNetworkRouteInfoEntry(properties);
        };

        /**
         * Encodes the specified ForeignNetworkRouteInfoEntry message. Does not implicitly {@link peer_rpc.ForeignNetworkRouteInfoEntry.verify|verify} messages.
         * @function encode
         * @memberof peer_rpc.ForeignNetworkRouteInfoEntry
         * @static
         * @param {peer_rpc.IForeignNetworkRouteInfoEntry} message ForeignNetworkRouteInfoEntry message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ForeignNetworkRouteInfoEntry.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.foreignPeerIds != null && message.foreignPeerIds.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (let i = 0; i < message.foreignPeerIds.length; ++i)
                    writer.uint32(message.foreignPeerIds[i]);
                writer.ldelim();
            }
            if (message.lastUpdate != null && Object.hasOwnProperty.call(message, "lastUpdate"))
                $root.google.protobuf.Timestamp.encode(message.lastUpdate, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.version);
            if (message.networkSecretDigest != null && Object.hasOwnProperty.call(message, "networkSecretDigest"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.networkSecretDigest);
            if (message.myPeerIdForThisNetwork != null && Object.hasOwnProperty.call(message, "myPeerIdForThisNetwork"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.myPeerIdForThisNetwork);
            return writer;
        };

        /**
         * Encodes the specified ForeignNetworkRouteInfoEntry message, length delimited. Does not implicitly {@link peer_rpc.ForeignNetworkRouteInfoEntry.verify|verify} messages.
         * @function encodeDelimited
         * @memberof peer_rpc.ForeignNetworkRouteInfoEntry
         * @static
         * @param {peer_rpc.IForeignNetworkRouteInfoEntry} message ForeignNetworkRouteInfoEntry message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ForeignNetworkRouteInfoEntry.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ForeignNetworkRouteInfoEntry message from the specified reader or buffer.
         * @function decode
         * @memberof peer_rpc.ForeignNetworkRouteInfoEntry
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {peer_rpc.ForeignNetworkRouteInfoEntry} ForeignNetworkRouteInfoEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ForeignNetworkRouteInfoEntry.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.peer_rpc.ForeignNetworkRouteInfoEntry();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.foreignPeerIds && message.foreignPeerIds.length))
                            message.foreignPeerIds = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.foreignPeerIds.push(reader.uint32());
                        } else
                            message.foreignPeerIds.push(reader.uint32());
                        break;
                    }
                case 2: {
                        message.lastUpdate = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.version = reader.uint32();
                        break;
                    }
                case 4: {
                        message.networkSecretDigest = reader.bytes();
                        break;
                    }
                case 5: {
                        message.myPeerIdForThisNetwork = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ForeignNetworkRouteInfoEntry message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof peer_rpc.ForeignNetworkRouteInfoEntry
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {peer_rpc.ForeignNetworkRouteInfoEntry} ForeignNetworkRouteInfoEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ForeignNetworkRouteInfoEntry.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ForeignNetworkRouteInfoEntry message.
         * @function verify
         * @memberof peer_rpc.ForeignNetworkRouteInfoEntry
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ForeignNetworkRouteInfoEntry.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.foreignPeerIds != null && message.hasOwnProperty("foreignPeerIds")) {
                if (!Array.isArray(message.foreignPeerIds))
                    return "foreignPeerIds: array expected";
                for (let i = 0; i < message.foreignPeerIds.length; ++i)
                    if (!$util.isInteger(message.foreignPeerIds[i]))
                        return "foreignPeerIds: integer[] expected";
            }
            if (message.lastUpdate != null && message.hasOwnProperty("lastUpdate")) {
                let error = $root.google.protobuf.Timestamp.verify(message.lastUpdate);
                if (error)
                    return "lastUpdate." + error;
            }
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version))
                    return "version: integer expected";
            if (message.networkSecretDigest != null && message.hasOwnProperty("networkSecretDigest"))
                if (!(message.networkSecretDigest && typeof message.networkSecretDigest.length === "number" || $util.isString(message.networkSecretDigest)))
                    return "networkSecretDigest: buffer expected";
            if (message.myPeerIdForThisNetwork != null && message.hasOwnProperty("myPeerIdForThisNetwork"))
                if (!$util.isInteger(message.myPeerIdForThisNetwork))
                    return "myPeerIdForThisNetwork: integer expected";
            return null;
        };

        /**
         * Creates a ForeignNetworkRouteInfoEntry message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof peer_rpc.ForeignNetworkRouteInfoEntry
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {peer_rpc.ForeignNetworkRouteInfoEntry} ForeignNetworkRouteInfoEntry
         */
        ForeignNetworkRouteInfoEntry.fromObject = function fromObject(object) {
            if (object instanceof $root.peer_rpc.ForeignNetworkRouteInfoEntry)
                return object;
            let message = new $root.peer_rpc.ForeignNetworkRouteInfoEntry();
            if (object.foreignPeerIds) {
                if (!Array.isArray(object.foreignPeerIds))
                    throw TypeError(".peer_rpc.ForeignNetworkRouteInfoEntry.foreignPeerIds: array expected");
                message.foreignPeerIds = [];
                for (let i = 0; i < object.foreignPeerIds.length; ++i)
                    message.foreignPeerIds[i] = object.foreignPeerIds[i] >>> 0;
            }
            if (object.lastUpdate != null) {
                if (typeof object.lastUpdate !== "object")
                    throw TypeError(".peer_rpc.ForeignNetworkRouteInfoEntry.lastUpdate: object expected");
                message.lastUpdate = $root.google.protobuf.Timestamp.fromObject(object.lastUpdate);
            }
            if (object.version != null)
                message.version = object.version >>> 0;
            if (object.networkSecretDigest != null)
                if (typeof object.networkSecretDigest === "string")
                    $util.base64.decode(object.networkSecretDigest, message.networkSecretDigest = $util.newBuffer($util.base64.length(object.networkSecretDigest)), 0);
                else if (object.networkSecretDigest.length >= 0)
                    message.networkSecretDigest = object.networkSecretDigest;
            if (object.myPeerIdForThisNetwork != null)
                message.myPeerIdForThisNetwork = object.myPeerIdForThisNetwork >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a ForeignNetworkRouteInfoEntry message. Also converts values to other types if specified.
         * @function toObject
         * @memberof peer_rpc.ForeignNetworkRouteInfoEntry
         * @static
         * @param {peer_rpc.ForeignNetworkRouteInfoEntry} message ForeignNetworkRouteInfoEntry
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ForeignNetworkRouteInfoEntry.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.foreignPeerIds = [];
            if (options.defaults) {
                object.lastUpdate = null;
                object.version = 0;
                if (options.bytes === String)
                    object.networkSecretDigest = "";
                else {
                    object.networkSecretDigest = [];
                    if (options.bytes !== Array)
                        object.networkSecretDigest = $util.newBuffer(object.networkSecretDigest);
                }
                object.myPeerIdForThisNetwork = 0;
            }
            if (message.foreignPeerIds && message.foreignPeerIds.length) {
                object.foreignPeerIds = [];
                for (let j = 0; j < message.foreignPeerIds.length; ++j)
                    object.foreignPeerIds[j] = message.foreignPeerIds[j];
            }
            if (message.lastUpdate != null && message.hasOwnProperty("lastUpdate"))
                object.lastUpdate = $root.google.protobuf.Timestamp.toObject(message.lastUpdate, options);
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            if (message.networkSecretDigest != null && message.hasOwnProperty("networkSecretDigest"))
                object.networkSecretDigest = options.bytes === String ? $util.base64.encode(message.networkSecretDigest, 0, message.networkSecretDigest.length) : options.bytes === Array ? Array.prototype.slice.call(message.networkSecretDigest) : message.networkSecretDigest;
            if (message.myPeerIdForThisNetwork != null && message.hasOwnProperty("myPeerIdForThisNetwork"))
                object.myPeerIdForThisNetwork = message.myPeerIdForThisNetwork;
            return object;
        };

        /**
         * Converts this ForeignNetworkRouteInfoEntry to JSON.
         * @function toJSON
         * @memberof peer_rpc.ForeignNetworkRouteInfoEntry
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ForeignNetworkRouteInfoEntry.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ForeignNetworkRouteInfoEntry
         * @function getTypeUrl
         * @memberof peer_rpc.ForeignNetworkRouteInfoEntry
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ForeignNetworkRouteInfoEntry.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/peer_rpc.ForeignNetworkRouteInfoEntry";
        };

        return ForeignNetworkRouteInfoEntry;
    })();

    peer_rpc.RouteForeignNetworkInfos = (function() {

        /**
         * Properties of a RouteForeignNetworkInfos.
         * @memberof peer_rpc
         * @interface IRouteForeignNetworkInfos
         * @property {Array.<peer_rpc.RouteForeignNetworkInfos.IInfo>|null} [infos] RouteForeignNetworkInfos infos
         */

        /**
         * Constructs a new RouteForeignNetworkInfos.
         * @memberof peer_rpc
         * @classdesc Represents a RouteForeignNetworkInfos.
         * @implements IRouteForeignNetworkInfos
         * @constructor
         * @param {peer_rpc.IRouteForeignNetworkInfos=} [properties] Properties to set
         */
        function RouteForeignNetworkInfos(properties) {
            this.infos = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RouteForeignNetworkInfos infos.
         * @member {Array.<peer_rpc.RouteForeignNetworkInfos.IInfo>} infos
         * @memberof peer_rpc.RouteForeignNetworkInfos
         * @instance
         */
        RouteForeignNetworkInfos.prototype.infos = $util.emptyArray;

        /**
         * Creates a new RouteForeignNetworkInfos instance using the specified properties.
         * @function create
         * @memberof peer_rpc.RouteForeignNetworkInfos
         * @static
         * @param {peer_rpc.IRouteForeignNetworkInfos=} [properties] Properties to set
         * @returns {peer_rpc.RouteForeignNetworkInfos} RouteForeignNetworkInfos instance
         */
        RouteForeignNetworkInfos.create = function create(properties) {
            return new RouteForeignNetworkInfos(properties);
        };

        /**
         * Encodes the specified RouteForeignNetworkInfos message. Does not implicitly {@link peer_rpc.RouteForeignNetworkInfos.verify|verify} messages.
         * @function encode
         * @memberof peer_rpc.RouteForeignNetworkInfos
         * @static
         * @param {peer_rpc.IRouteForeignNetworkInfos} message RouteForeignNetworkInfos message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RouteForeignNetworkInfos.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.infos != null && message.infos.length)
                for (let i = 0; i < message.infos.length; ++i)
                    $root.peer_rpc.RouteForeignNetworkInfos.Info.encode(message.infos[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RouteForeignNetworkInfos message, length delimited. Does not implicitly {@link peer_rpc.RouteForeignNetworkInfos.verify|verify} messages.
         * @function encodeDelimited
         * @memberof peer_rpc.RouteForeignNetworkInfos
         * @static
         * @param {peer_rpc.IRouteForeignNetworkInfos} message RouteForeignNetworkInfos message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RouteForeignNetworkInfos.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RouteForeignNetworkInfos message from the specified reader or buffer.
         * @function decode
         * @memberof peer_rpc.RouteForeignNetworkInfos
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {peer_rpc.RouteForeignNetworkInfos} RouteForeignNetworkInfos
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RouteForeignNetworkInfos.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.peer_rpc.RouteForeignNetworkInfos();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.infos && message.infos.length))
                            message.infos = [];
                        message.infos.push($root.peer_rpc.RouteForeignNetworkInfos.Info.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RouteForeignNetworkInfos message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof peer_rpc.RouteForeignNetworkInfos
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {peer_rpc.RouteForeignNetworkInfos} RouteForeignNetworkInfos
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RouteForeignNetworkInfos.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RouteForeignNetworkInfos message.
         * @function verify
         * @memberof peer_rpc.RouteForeignNetworkInfos
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RouteForeignNetworkInfos.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.infos != null && message.hasOwnProperty("infos")) {
                if (!Array.isArray(message.infos))
                    return "infos: array expected";
                for (let i = 0; i < message.infos.length; ++i) {
                    let error = $root.peer_rpc.RouteForeignNetworkInfos.Info.verify(message.infos[i]);
                    if (error)
                        return "infos." + error;
                }
            }
            return null;
        };

        /**
         * Creates a RouteForeignNetworkInfos message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof peer_rpc.RouteForeignNetworkInfos
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {peer_rpc.RouteForeignNetworkInfos} RouteForeignNetworkInfos
         */
        RouteForeignNetworkInfos.fromObject = function fromObject(object) {
            if (object instanceof $root.peer_rpc.RouteForeignNetworkInfos)
                return object;
            let message = new $root.peer_rpc.RouteForeignNetworkInfos();
            if (object.infos) {
                if (!Array.isArray(object.infos))
                    throw TypeError(".peer_rpc.RouteForeignNetworkInfos.infos: array expected");
                message.infos = [];
                for (let i = 0; i < object.infos.length; ++i) {
                    if (typeof object.infos[i] !== "object")
                        throw TypeError(".peer_rpc.RouteForeignNetworkInfos.infos: object expected");
                    message.infos[i] = $root.peer_rpc.RouteForeignNetworkInfos.Info.fromObject(object.infos[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a RouteForeignNetworkInfos message. Also converts values to other types if specified.
         * @function toObject
         * @memberof peer_rpc.RouteForeignNetworkInfos
         * @static
         * @param {peer_rpc.RouteForeignNetworkInfos} message RouteForeignNetworkInfos
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RouteForeignNetworkInfos.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.infos = [];
            if (message.infos && message.infos.length) {
                object.infos = [];
                for (let j = 0; j < message.infos.length; ++j)
                    object.infos[j] = $root.peer_rpc.RouteForeignNetworkInfos.Info.toObject(message.infos[j], options);
            }
            return object;
        };

        /**
         * Converts this RouteForeignNetworkInfos to JSON.
         * @function toJSON
         * @memberof peer_rpc.RouteForeignNetworkInfos
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RouteForeignNetworkInfos.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RouteForeignNetworkInfos
         * @function getTypeUrl
         * @memberof peer_rpc.RouteForeignNetworkInfos
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RouteForeignNetworkInfos.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/peer_rpc.RouteForeignNetworkInfos";
        };

        RouteForeignNetworkInfos.Info = (function() {

            /**
             * Properties of an Info.
             * @memberof peer_rpc.RouteForeignNetworkInfos
             * @interface IInfo
             * @property {peer_rpc.IForeignNetworkRouteInfoKey|null} [key] Info key
             * @property {peer_rpc.IForeignNetworkRouteInfoEntry|null} [value] Info value
             */

            /**
             * Constructs a new Info.
             * @memberof peer_rpc.RouteForeignNetworkInfos
             * @classdesc Represents an Info.
             * @implements IInfo
             * @constructor
             * @param {peer_rpc.RouteForeignNetworkInfos.IInfo=} [properties] Properties to set
             */
            function Info(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Info key.
             * @member {peer_rpc.IForeignNetworkRouteInfoKey|null|undefined} key
             * @memberof peer_rpc.RouteForeignNetworkInfos.Info
             * @instance
             */
            Info.prototype.key = null;

            /**
             * Info value.
             * @member {peer_rpc.IForeignNetworkRouteInfoEntry|null|undefined} value
             * @memberof peer_rpc.RouteForeignNetworkInfos.Info
             * @instance
             */
            Info.prototype.value = null;

            /**
             * Creates a new Info instance using the specified properties.
             * @function create
             * @memberof peer_rpc.RouteForeignNetworkInfos.Info
             * @static
             * @param {peer_rpc.RouteForeignNetworkInfos.IInfo=} [properties] Properties to set
             * @returns {peer_rpc.RouteForeignNetworkInfos.Info} Info instance
             */
            Info.create = function create(properties) {
                return new Info(properties);
            };

            /**
             * Encodes the specified Info message. Does not implicitly {@link peer_rpc.RouteForeignNetworkInfos.Info.verify|verify} messages.
             * @function encode
             * @memberof peer_rpc.RouteForeignNetworkInfos.Info
             * @static
             * @param {peer_rpc.RouteForeignNetworkInfos.IInfo} message Info message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Info.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                    $root.peer_rpc.ForeignNetworkRouteInfoKey.encode(message.key, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    $root.peer_rpc.ForeignNetworkRouteInfoEntry.encode(message.value, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Info message, length delimited. Does not implicitly {@link peer_rpc.RouteForeignNetworkInfos.Info.verify|verify} messages.
             * @function encodeDelimited
             * @memberof peer_rpc.RouteForeignNetworkInfos.Info
             * @static
             * @param {peer_rpc.RouteForeignNetworkInfos.IInfo} message Info message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Info.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Info message from the specified reader or buffer.
             * @function decode
             * @memberof peer_rpc.RouteForeignNetworkInfos.Info
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {peer_rpc.RouteForeignNetworkInfos.Info} Info
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Info.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.peer_rpc.RouteForeignNetworkInfos.Info();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.key = $root.peer_rpc.ForeignNetworkRouteInfoKey.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.value = $root.peer_rpc.ForeignNetworkRouteInfoEntry.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Info message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof peer_rpc.RouteForeignNetworkInfos.Info
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {peer_rpc.RouteForeignNetworkInfos.Info} Info
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Info.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Info message.
             * @function verify
             * @memberof peer_rpc.RouteForeignNetworkInfos.Info
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Info.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.key != null && message.hasOwnProperty("key")) {
                    let error = $root.peer_rpc.ForeignNetworkRouteInfoKey.verify(message.key);
                    if (error)
                        return "key." + error;
                }
                if (message.value != null && message.hasOwnProperty("value")) {
                    let error = $root.peer_rpc.ForeignNetworkRouteInfoEntry.verify(message.value);
                    if (error)
                        return "value." + error;
                }
                return null;
            };

            /**
             * Creates an Info message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof peer_rpc.RouteForeignNetworkInfos.Info
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {peer_rpc.RouteForeignNetworkInfos.Info} Info
             */
            Info.fromObject = function fromObject(object) {
                if (object instanceof $root.peer_rpc.RouteForeignNetworkInfos.Info)
                    return object;
                let message = new $root.peer_rpc.RouteForeignNetworkInfos.Info();
                if (object.key != null) {
                    if (typeof object.key !== "object")
                        throw TypeError(".peer_rpc.RouteForeignNetworkInfos.Info.key: object expected");
                    message.key = $root.peer_rpc.ForeignNetworkRouteInfoKey.fromObject(object.key);
                }
                if (object.value != null) {
                    if (typeof object.value !== "object")
                        throw TypeError(".peer_rpc.RouteForeignNetworkInfos.Info.value: object expected");
                    message.value = $root.peer_rpc.ForeignNetworkRouteInfoEntry.fromObject(object.value);
                }
                return message;
            };

            /**
             * Creates a plain object from an Info message. Also converts values to other types if specified.
             * @function toObject
             * @memberof peer_rpc.RouteForeignNetworkInfos.Info
             * @static
             * @param {peer_rpc.RouteForeignNetworkInfos.Info} message Info
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Info.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.key = null;
                    object.value = null;
                }
                if (message.key != null && message.hasOwnProperty("key"))
                    object.key = $root.peer_rpc.ForeignNetworkRouteInfoKey.toObject(message.key, options);
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = $root.peer_rpc.ForeignNetworkRouteInfoEntry.toObject(message.value, options);
                return object;
            };

            /**
             * Converts this Info to JSON.
             * @function toJSON
             * @memberof peer_rpc.RouteForeignNetworkInfos.Info
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Info.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Info
             * @function getTypeUrl
             * @memberof peer_rpc.RouteForeignNetworkInfos.Info
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Info.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/peer_rpc.RouteForeignNetworkInfos.Info";
            };

            return Info;
        })();

        return RouteForeignNetworkInfos;
    })();

    peer_rpc.RouteForeignNetworkSummary = (function() {

        /**
         * Properties of a RouteForeignNetworkSummary.
         * @memberof peer_rpc
         * @interface IRouteForeignNetworkSummary
         * @property {Object.<string,peer_rpc.RouteForeignNetworkSummary.IInfo>|null} [infoMap] RouteForeignNetworkSummary infoMap
         */

        /**
         * Constructs a new RouteForeignNetworkSummary.
         * @memberof peer_rpc
         * @classdesc Represents a RouteForeignNetworkSummary.
         * @implements IRouteForeignNetworkSummary
         * @constructor
         * @param {peer_rpc.IRouteForeignNetworkSummary=} [properties] Properties to set
         */
        function RouteForeignNetworkSummary(properties) {
            this.infoMap = {};
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RouteForeignNetworkSummary infoMap.
         * @member {Object.<string,peer_rpc.RouteForeignNetworkSummary.IInfo>} infoMap
         * @memberof peer_rpc.RouteForeignNetworkSummary
         * @instance
         */
        RouteForeignNetworkSummary.prototype.infoMap = $util.emptyObject;

        /**
         * Creates a new RouteForeignNetworkSummary instance using the specified properties.
         * @function create
         * @memberof peer_rpc.RouteForeignNetworkSummary
         * @static
         * @param {peer_rpc.IRouteForeignNetworkSummary=} [properties] Properties to set
         * @returns {peer_rpc.RouteForeignNetworkSummary} RouteForeignNetworkSummary instance
         */
        RouteForeignNetworkSummary.create = function create(properties) {
            return new RouteForeignNetworkSummary(properties);
        };

        /**
         * Encodes the specified RouteForeignNetworkSummary message. Does not implicitly {@link peer_rpc.RouteForeignNetworkSummary.verify|verify} messages.
         * @function encode
         * @memberof peer_rpc.RouteForeignNetworkSummary
         * @static
         * @param {peer_rpc.IRouteForeignNetworkSummary} message RouteForeignNetworkSummary message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RouteForeignNetworkSummary.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.infoMap != null && Object.hasOwnProperty.call(message, "infoMap"))
                for (let keys = Object.keys(message.infoMap), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).uint32(keys[i]);
                    $root.peer_rpc.RouteForeignNetworkSummary.Info.encode(message.infoMap[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            return writer;
        };

        /**
         * Encodes the specified RouteForeignNetworkSummary message, length delimited. Does not implicitly {@link peer_rpc.RouteForeignNetworkSummary.verify|verify} messages.
         * @function encodeDelimited
         * @memberof peer_rpc.RouteForeignNetworkSummary
         * @static
         * @param {peer_rpc.IRouteForeignNetworkSummary} message RouteForeignNetworkSummary message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RouteForeignNetworkSummary.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RouteForeignNetworkSummary message from the specified reader or buffer.
         * @function decode
         * @memberof peer_rpc.RouteForeignNetworkSummary
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {peer_rpc.RouteForeignNetworkSummary} RouteForeignNetworkSummary
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RouteForeignNetworkSummary.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.peer_rpc.RouteForeignNetworkSummary(), key, value;
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (message.infoMap === $util.emptyObject)
                            message.infoMap = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = null;
                        while (reader.pos < end2) {
                            let tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.uint32();
                                break;
                            case 2:
                                value = $root.peer_rpc.RouteForeignNetworkSummary.Info.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.infoMap[key] = value;
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RouteForeignNetworkSummary message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof peer_rpc.RouteForeignNetworkSummary
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {peer_rpc.RouteForeignNetworkSummary} RouteForeignNetworkSummary
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RouteForeignNetworkSummary.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RouteForeignNetworkSummary message.
         * @function verify
         * @memberof peer_rpc.RouteForeignNetworkSummary
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RouteForeignNetworkSummary.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.infoMap != null && message.hasOwnProperty("infoMap")) {
                if (!$util.isObject(message.infoMap))
                    return "infoMap: object expected";
                let key = Object.keys(message.infoMap);
                for (let i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "infoMap: integer key{k:uint32} expected";
                    {
                        let error = $root.peer_rpc.RouteForeignNetworkSummary.Info.verify(message.infoMap[key[i]]);
                        if (error)
                            return "infoMap." + error;
                    }
                }
            }
            return null;
        };

        /**
         * Creates a RouteForeignNetworkSummary message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof peer_rpc.RouteForeignNetworkSummary
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {peer_rpc.RouteForeignNetworkSummary} RouteForeignNetworkSummary
         */
        RouteForeignNetworkSummary.fromObject = function fromObject(object) {
            if (object instanceof $root.peer_rpc.RouteForeignNetworkSummary)
                return object;
            let message = new $root.peer_rpc.RouteForeignNetworkSummary();
            if (object.infoMap) {
                if (typeof object.infoMap !== "object")
                    throw TypeError(".peer_rpc.RouteForeignNetworkSummary.infoMap: object expected");
                message.infoMap = {};
                for (let keys = Object.keys(object.infoMap), i = 0; i < keys.length; ++i) {
                    if (typeof object.infoMap[keys[i]] !== "object")
                        throw TypeError(".peer_rpc.RouteForeignNetworkSummary.infoMap: object expected");
                    message.infoMap[keys[i]] = $root.peer_rpc.RouteForeignNetworkSummary.Info.fromObject(object.infoMap[keys[i]]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a RouteForeignNetworkSummary message. Also converts values to other types if specified.
         * @function toObject
         * @memberof peer_rpc.RouteForeignNetworkSummary
         * @static
         * @param {peer_rpc.RouteForeignNetworkSummary} message RouteForeignNetworkSummary
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RouteForeignNetworkSummary.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.objects || options.defaults)
                object.infoMap = {};
            let keys2;
            if (message.infoMap && (keys2 = Object.keys(message.infoMap)).length) {
                object.infoMap = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.infoMap[keys2[j]] = $root.peer_rpc.RouteForeignNetworkSummary.Info.toObject(message.infoMap[keys2[j]], options);
            }
            return object;
        };

        /**
         * Converts this RouteForeignNetworkSummary to JSON.
         * @function toJSON
         * @memberof peer_rpc.RouteForeignNetworkSummary
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RouteForeignNetworkSummary.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RouteForeignNetworkSummary
         * @function getTypeUrl
         * @memberof peer_rpc.RouteForeignNetworkSummary
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RouteForeignNetworkSummary.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/peer_rpc.RouteForeignNetworkSummary";
        };

        RouteForeignNetworkSummary.Info = (function() {

            /**
             * Properties of an Info.
             * @memberof peer_rpc.RouteForeignNetworkSummary
             * @interface IInfo
             * @property {number|null} [peerId] Info peerId
             * @property {number|null} [networkCount] Info networkCount
             * @property {number|null} [peerCount] Info peerCount
             */

            /**
             * Constructs a new Info.
             * @memberof peer_rpc.RouteForeignNetworkSummary
             * @classdesc Represents an Info.
             * @implements IInfo
             * @constructor
             * @param {peer_rpc.RouteForeignNetworkSummary.IInfo=} [properties] Properties to set
             */
            function Info(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Info peerId.
             * @member {number} peerId
             * @memberof peer_rpc.RouteForeignNetworkSummary.Info
             * @instance
             */
            Info.prototype.peerId = 0;

            /**
             * Info networkCount.
             * @member {number} networkCount
             * @memberof peer_rpc.RouteForeignNetworkSummary.Info
             * @instance
             */
            Info.prototype.networkCount = 0;

            /**
             * Info peerCount.
             * @member {number} peerCount
             * @memberof peer_rpc.RouteForeignNetworkSummary.Info
             * @instance
             */
            Info.prototype.peerCount = 0;

            /**
             * Creates a new Info instance using the specified properties.
             * @function create
             * @memberof peer_rpc.RouteForeignNetworkSummary.Info
             * @static
             * @param {peer_rpc.RouteForeignNetworkSummary.IInfo=} [properties] Properties to set
             * @returns {peer_rpc.RouteForeignNetworkSummary.Info} Info instance
             */
            Info.create = function create(properties) {
                return new Info(properties);
            };

            /**
             * Encodes the specified Info message. Does not implicitly {@link peer_rpc.RouteForeignNetworkSummary.Info.verify|verify} messages.
             * @function encode
             * @memberof peer_rpc.RouteForeignNetworkSummary.Info
             * @static
             * @param {peer_rpc.RouteForeignNetworkSummary.IInfo} message Info message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Info.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.peerId != null && Object.hasOwnProperty.call(message, "peerId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.peerId);
                if (message.networkCount != null && Object.hasOwnProperty.call(message, "networkCount"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.networkCount);
                if (message.peerCount != null && Object.hasOwnProperty.call(message, "peerCount"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.peerCount);
                return writer;
            };

            /**
             * Encodes the specified Info message, length delimited. Does not implicitly {@link peer_rpc.RouteForeignNetworkSummary.Info.verify|verify} messages.
             * @function encodeDelimited
             * @memberof peer_rpc.RouteForeignNetworkSummary.Info
             * @static
             * @param {peer_rpc.RouteForeignNetworkSummary.IInfo} message Info message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Info.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Info message from the specified reader or buffer.
             * @function decode
             * @memberof peer_rpc.RouteForeignNetworkSummary.Info
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {peer_rpc.RouteForeignNetworkSummary.Info} Info
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Info.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.peer_rpc.RouteForeignNetworkSummary.Info();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.peerId = reader.uint32();
                            break;
                        }
                    case 2: {
                            message.networkCount = reader.uint32();
                            break;
                        }
                    case 3: {
                            message.peerCount = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Info message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof peer_rpc.RouteForeignNetworkSummary.Info
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {peer_rpc.RouteForeignNetworkSummary.Info} Info
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Info.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Info message.
             * @function verify
             * @memberof peer_rpc.RouteForeignNetworkSummary.Info
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Info.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.peerId != null && message.hasOwnProperty("peerId"))
                    if (!$util.isInteger(message.peerId))
                        return "peerId: integer expected";
                if (message.networkCount != null && message.hasOwnProperty("networkCount"))
                    if (!$util.isInteger(message.networkCount))
                        return "networkCount: integer expected";
                if (message.peerCount != null && message.hasOwnProperty("peerCount"))
                    if (!$util.isInteger(message.peerCount))
                        return "peerCount: integer expected";
                return null;
            };

            /**
             * Creates an Info message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof peer_rpc.RouteForeignNetworkSummary.Info
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {peer_rpc.RouteForeignNetworkSummary.Info} Info
             */
            Info.fromObject = function fromObject(object) {
                if (object instanceof $root.peer_rpc.RouteForeignNetworkSummary.Info)
                    return object;
                let message = new $root.peer_rpc.RouteForeignNetworkSummary.Info();
                if (object.peerId != null)
                    message.peerId = object.peerId >>> 0;
                if (object.networkCount != null)
                    message.networkCount = object.networkCount >>> 0;
                if (object.peerCount != null)
                    message.peerCount = object.peerCount >>> 0;
                return message;
            };

            /**
             * Creates a plain object from an Info message. Also converts values to other types if specified.
             * @function toObject
             * @memberof peer_rpc.RouteForeignNetworkSummary.Info
             * @static
             * @param {peer_rpc.RouteForeignNetworkSummary.Info} message Info
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Info.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.peerId = 0;
                    object.networkCount = 0;
                    object.peerCount = 0;
                }
                if (message.peerId != null && message.hasOwnProperty("peerId"))
                    object.peerId = message.peerId;
                if (message.networkCount != null && message.hasOwnProperty("networkCount"))
                    object.networkCount = message.networkCount;
                if (message.peerCount != null && message.hasOwnProperty("peerCount"))
                    object.peerCount = message.peerCount;
                return object;
            };

            /**
             * Converts this Info to JSON.
             * @function toJSON
             * @memberof peer_rpc.RouteForeignNetworkSummary.Info
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Info.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Info
             * @function getTypeUrl
             * @memberof peer_rpc.RouteForeignNetworkSummary.Info
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Info.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/peer_rpc.RouteForeignNetworkSummary.Info";
            };

            return Info;
        })();

        return RouteForeignNetworkSummary;
    })();

    peer_rpc.PeerGroupInfo = (function() {

        /**
         * Properties of a PeerGroupInfo.
         * @memberof peer_rpc
         * @interface IPeerGroupInfo
         * @property {string|null} [groupName] PeerGroupInfo groupName
         * @property {Uint8Array|null} [groupProof] PeerGroupInfo groupProof
         */

        /**
         * Constructs a new PeerGroupInfo.
         * @memberof peer_rpc
         * @classdesc Represents a PeerGroupInfo.
         * @implements IPeerGroupInfo
         * @constructor
         * @param {peer_rpc.IPeerGroupInfo=} [properties] Properties to set
         */
        function PeerGroupInfo(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PeerGroupInfo groupName.
         * @member {string} groupName
         * @memberof peer_rpc.PeerGroupInfo
         * @instance
         */
        PeerGroupInfo.prototype.groupName = "";

        /**
         * PeerGroupInfo groupProof.
         * @member {Uint8Array} groupProof
         * @memberof peer_rpc.PeerGroupInfo
         * @instance
         */
        PeerGroupInfo.prototype.groupProof = $util.newBuffer([]);

        /**
         * Creates a new PeerGroupInfo instance using the specified properties.
         * @function create
         * @memberof peer_rpc.PeerGroupInfo
         * @static
         * @param {peer_rpc.IPeerGroupInfo=} [properties] Properties to set
         * @returns {peer_rpc.PeerGroupInfo} PeerGroupInfo instance
         */
        PeerGroupInfo.create = function create(properties) {
            return new PeerGroupInfo(properties);
        };

        /**
         * Encodes the specified PeerGroupInfo message. Does not implicitly {@link peer_rpc.PeerGroupInfo.verify|verify} messages.
         * @function encode
         * @memberof peer_rpc.PeerGroupInfo
         * @static
         * @param {peer_rpc.IPeerGroupInfo} message PeerGroupInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PeerGroupInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.groupName != null && Object.hasOwnProperty.call(message, "groupName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.groupName);
            if (message.groupProof != null && Object.hasOwnProperty.call(message, "groupProof"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.groupProof);
            return writer;
        };

        /**
         * Encodes the specified PeerGroupInfo message, length delimited. Does not implicitly {@link peer_rpc.PeerGroupInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof peer_rpc.PeerGroupInfo
         * @static
         * @param {peer_rpc.IPeerGroupInfo} message PeerGroupInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PeerGroupInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PeerGroupInfo message from the specified reader or buffer.
         * @function decode
         * @memberof peer_rpc.PeerGroupInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {peer_rpc.PeerGroupInfo} PeerGroupInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PeerGroupInfo.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.peer_rpc.PeerGroupInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.groupName = reader.string();
                        break;
                    }
                case 2: {
                        message.groupProof = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PeerGroupInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof peer_rpc.PeerGroupInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {peer_rpc.PeerGroupInfo} PeerGroupInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PeerGroupInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PeerGroupInfo message.
         * @function verify
         * @memberof peer_rpc.PeerGroupInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PeerGroupInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.groupName != null && message.hasOwnProperty("groupName"))
                if (!$util.isString(message.groupName))
                    return "groupName: string expected";
            if (message.groupProof != null && message.hasOwnProperty("groupProof"))
                if (!(message.groupProof && typeof message.groupProof.length === "number" || $util.isString(message.groupProof)))
                    return "groupProof: buffer expected";
            return null;
        };

        /**
         * Creates a PeerGroupInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof peer_rpc.PeerGroupInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {peer_rpc.PeerGroupInfo} PeerGroupInfo
         */
        PeerGroupInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.peer_rpc.PeerGroupInfo)
                return object;
            let message = new $root.peer_rpc.PeerGroupInfo();
            if (object.groupName != null)
                message.groupName = String(object.groupName);
            if (object.groupProof != null)
                if (typeof object.groupProof === "string")
                    $util.base64.decode(object.groupProof, message.groupProof = $util.newBuffer($util.base64.length(object.groupProof)), 0);
                else if (object.groupProof.length >= 0)
                    message.groupProof = object.groupProof;
            return message;
        };

        /**
         * Creates a plain object from a PeerGroupInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof peer_rpc.PeerGroupInfo
         * @static
         * @param {peer_rpc.PeerGroupInfo} message PeerGroupInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PeerGroupInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.groupName = "";
                if (options.bytes === String)
                    object.groupProof = "";
                else {
                    object.groupProof = [];
                    if (options.bytes !== Array)
                        object.groupProof = $util.newBuffer(object.groupProof);
                }
            }
            if (message.groupName != null && message.hasOwnProperty("groupName"))
                object.groupName = message.groupName;
            if (message.groupProof != null && message.hasOwnProperty("groupProof"))
                object.groupProof = options.bytes === String ? $util.base64.encode(message.groupProof, 0, message.groupProof.length) : options.bytes === Array ? Array.prototype.slice.call(message.groupProof) : message.groupProof;
            return object;
        };

        /**
         * Converts this PeerGroupInfo to JSON.
         * @function toJSON
         * @memberof peer_rpc.PeerGroupInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PeerGroupInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PeerGroupInfo
         * @function getTypeUrl
         * @memberof peer_rpc.PeerGroupInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PeerGroupInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/peer_rpc.PeerGroupInfo";
        };

        return PeerGroupInfo;
    })();

    peer_rpc.SyncRouteInfoRequest = (function() {

        /**
         * Properties of a SyncRouteInfoRequest.
         * @memberof peer_rpc
         * @interface ISyncRouteInfoRequest
         * @property {number|null} [myPeerId] SyncRouteInfoRequest myPeerId
         * @property {number|Long|null} [mySessionId] SyncRouteInfoRequest mySessionId
         * @property {boolean|null} [isInitiator] SyncRouteInfoRequest isInitiator
         * @property {peer_rpc.IRoutePeerInfos|null} [peerInfos] SyncRouteInfoRequest peerInfos
         * @property {peer_rpc.IRouteConnBitmap|null} [connBitmap] SyncRouteInfoRequest connBitmap
         * @property {peer_rpc.IRouteForeignNetworkInfos|null} [foreignNetworkInfos] SyncRouteInfoRequest foreignNetworkInfos
         */

        /**
         * Constructs a new SyncRouteInfoRequest.
         * @memberof peer_rpc
         * @classdesc Represents a SyncRouteInfoRequest.
         * @implements ISyncRouteInfoRequest
         * @constructor
         * @param {peer_rpc.ISyncRouteInfoRequest=} [properties] Properties to set
         */
        function SyncRouteInfoRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SyncRouteInfoRequest myPeerId.
         * @member {number} myPeerId
         * @memberof peer_rpc.SyncRouteInfoRequest
         * @instance
         */
        SyncRouteInfoRequest.prototype.myPeerId = 0;

        /**
         * SyncRouteInfoRequest mySessionId.
         * @member {number|Long} mySessionId
         * @memberof peer_rpc.SyncRouteInfoRequest
         * @instance
         */
        SyncRouteInfoRequest.prototype.mySessionId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * SyncRouteInfoRequest isInitiator.
         * @member {boolean} isInitiator
         * @memberof peer_rpc.SyncRouteInfoRequest
         * @instance
         */
        SyncRouteInfoRequest.prototype.isInitiator = false;

        /**
         * SyncRouteInfoRequest peerInfos.
         * @member {peer_rpc.IRoutePeerInfos|null|undefined} peerInfos
         * @memberof peer_rpc.SyncRouteInfoRequest
         * @instance
         */
        SyncRouteInfoRequest.prototype.peerInfos = null;

        /**
         * SyncRouteInfoRequest connBitmap.
         * @member {peer_rpc.IRouteConnBitmap|null|undefined} connBitmap
         * @memberof peer_rpc.SyncRouteInfoRequest
         * @instance
         */
        SyncRouteInfoRequest.prototype.connBitmap = null;

        /**
         * SyncRouteInfoRequest foreignNetworkInfos.
         * @member {peer_rpc.IRouteForeignNetworkInfos|null|undefined} foreignNetworkInfos
         * @memberof peer_rpc.SyncRouteInfoRequest
         * @instance
         */
        SyncRouteInfoRequest.prototype.foreignNetworkInfos = null;

        /**
         * Creates a new SyncRouteInfoRequest instance using the specified properties.
         * @function create
         * @memberof peer_rpc.SyncRouteInfoRequest
         * @static
         * @param {peer_rpc.ISyncRouteInfoRequest=} [properties] Properties to set
         * @returns {peer_rpc.SyncRouteInfoRequest} SyncRouteInfoRequest instance
         */
        SyncRouteInfoRequest.create = function create(properties) {
            return new SyncRouteInfoRequest(properties);
        };

        /**
         * Encodes the specified SyncRouteInfoRequest message. Does not implicitly {@link peer_rpc.SyncRouteInfoRequest.verify|verify} messages.
         * @function encode
         * @memberof peer_rpc.SyncRouteInfoRequest
         * @static
         * @param {peer_rpc.ISyncRouteInfoRequest} message SyncRouteInfoRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncRouteInfoRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.myPeerId != null && Object.hasOwnProperty.call(message, "myPeerId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.myPeerId);
            if (message.mySessionId != null && Object.hasOwnProperty.call(message, "mySessionId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.mySessionId);
            if (message.isInitiator != null && Object.hasOwnProperty.call(message, "isInitiator"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isInitiator);
            if (message.peerInfos != null && Object.hasOwnProperty.call(message, "peerInfos"))
                $root.peer_rpc.RoutePeerInfos.encode(message.peerInfos, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.connBitmap != null && Object.hasOwnProperty.call(message, "connBitmap"))
                $root.peer_rpc.RouteConnBitmap.encode(message.connBitmap, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.foreignNetworkInfos != null && Object.hasOwnProperty.call(message, "foreignNetworkInfos"))
                $root.peer_rpc.RouteForeignNetworkInfos.encode(message.foreignNetworkInfos, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SyncRouteInfoRequest message, length delimited. Does not implicitly {@link peer_rpc.SyncRouteInfoRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof peer_rpc.SyncRouteInfoRequest
         * @static
         * @param {peer_rpc.ISyncRouteInfoRequest} message SyncRouteInfoRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncRouteInfoRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SyncRouteInfoRequest message from the specified reader or buffer.
         * @function decode
         * @memberof peer_rpc.SyncRouteInfoRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {peer_rpc.SyncRouteInfoRequest} SyncRouteInfoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncRouteInfoRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.peer_rpc.SyncRouteInfoRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.myPeerId = reader.uint32();
                        break;
                    }
                case 2: {
                        message.mySessionId = reader.uint64();
                        break;
                    }
                case 3: {
                        message.isInitiator = reader.bool();
                        break;
                    }
                case 4: {
                        message.peerInfos = $root.peer_rpc.RoutePeerInfos.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.connBitmap = $root.peer_rpc.RouteConnBitmap.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.foreignNetworkInfos = $root.peer_rpc.RouteForeignNetworkInfos.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SyncRouteInfoRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof peer_rpc.SyncRouteInfoRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {peer_rpc.SyncRouteInfoRequest} SyncRouteInfoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncRouteInfoRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SyncRouteInfoRequest message.
         * @function verify
         * @memberof peer_rpc.SyncRouteInfoRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SyncRouteInfoRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.myPeerId != null && message.hasOwnProperty("myPeerId"))
                if (!$util.isInteger(message.myPeerId))
                    return "myPeerId: integer expected";
            if (message.mySessionId != null && message.hasOwnProperty("mySessionId"))
                if (!$util.isInteger(message.mySessionId) && !(message.mySessionId && $util.isInteger(message.mySessionId.low) && $util.isInteger(message.mySessionId.high)))
                    return "mySessionId: integer|Long expected";
            if (message.isInitiator != null && message.hasOwnProperty("isInitiator"))
                if (typeof message.isInitiator !== "boolean")
                    return "isInitiator: boolean expected";
            if (message.peerInfos != null && message.hasOwnProperty("peerInfos")) {
                let error = $root.peer_rpc.RoutePeerInfos.verify(message.peerInfos);
                if (error)
                    return "peerInfos." + error;
            }
            if (message.connBitmap != null && message.hasOwnProperty("connBitmap")) {
                let error = $root.peer_rpc.RouteConnBitmap.verify(message.connBitmap);
                if (error)
                    return "connBitmap." + error;
            }
            if (message.foreignNetworkInfos != null && message.hasOwnProperty("foreignNetworkInfos")) {
                let error = $root.peer_rpc.RouteForeignNetworkInfos.verify(message.foreignNetworkInfos);
                if (error)
                    return "foreignNetworkInfos." + error;
            }
            return null;
        };

        /**
         * Creates a SyncRouteInfoRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof peer_rpc.SyncRouteInfoRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {peer_rpc.SyncRouteInfoRequest} SyncRouteInfoRequest
         */
        SyncRouteInfoRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.peer_rpc.SyncRouteInfoRequest)
                return object;
            let message = new $root.peer_rpc.SyncRouteInfoRequest();
            if (object.myPeerId != null)
                message.myPeerId = object.myPeerId >>> 0;
            if (object.mySessionId != null)
                if ($util.Long)
                    (message.mySessionId = $util.Long.fromValue(object.mySessionId)).unsigned = true;
                else if (typeof object.mySessionId === "string")
                    message.mySessionId = parseInt(object.mySessionId, 10);
                else if (typeof object.mySessionId === "number")
                    message.mySessionId = object.mySessionId;
                else if (typeof object.mySessionId === "object")
                    message.mySessionId = new $util.LongBits(object.mySessionId.low >>> 0, object.mySessionId.high >>> 0).toNumber(true);
            if (object.isInitiator != null)
                message.isInitiator = Boolean(object.isInitiator);
            if (object.peerInfos != null) {
                if (typeof object.peerInfos !== "object")
                    throw TypeError(".peer_rpc.SyncRouteInfoRequest.peerInfos: object expected");
                message.peerInfos = $root.peer_rpc.RoutePeerInfos.fromObject(object.peerInfos);
            }
            if (object.connBitmap != null) {
                if (typeof object.connBitmap !== "object")
                    throw TypeError(".peer_rpc.SyncRouteInfoRequest.connBitmap: object expected");
                message.connBitmap = $root.peer_rpc.RouteConnBitmap.fromObject(object.connBitmap);
            }
            if (object.foreignNetworkInfos != null) {
                if (typeof object.foreignNetworkInfos !== "object")
                    throw TypeError(".peer_rpc.SyncRouteInfoRequest.foreignNetworkInfos: object expected");
                message.foreignNetworkInfos = $root.peer_rpc.RouteForeignNetworkInfos.fromObject(object.foreignNetworkInfos);
            }
            return message;
        };

        /**
         * Creates a plain object from a SyncRouteInfoRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof peer_rpc.SyncRouteInfoRequest
         * @static
         * @param {peer_rpc.SyncRouteInfoRequest} message SyncRouteInfoRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SyncRouteInfoRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.myPeerId = 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.mySessionId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.mySessionId = options.longs === String ? "0" : 0;
                object.isInitiator = false;
                object.peerInfos = null;
                object.connBitmap = null;
                object.foreignNetworkInfos = null;
            }
            if (message.myPeerId != null && message.hasOwnProperty("myPeerId"))
                object.myPeerId = message.myPeerId;
            if (message.mySessionId != null && message.hasOwnProperty("mySessionId"))
                if (typeof message.mySessionId === "number")
                    object.mySessionId = options.longs === String ? String(message.mySessionId) : message.mySessionId;
                else
                    object.mySessionId = options.longs === String ? $util.Long.prototype.toString.call(message.mySessionId) : options.longs === Number ? new $util.LongBits(message.mySessionId.low >>> 0, message.mySessionId.high >>> 0).toNumber(true) : message.mySessionId;
            if (message.isInitiator != null && message.hasOwnProperty("isInitiator"))
                object.isInitiator = message.isInitiator;
            if (message.peerInfos != null && message.hasOwnProperty("peerInfos"))
                object.peerInfos = $root.peer_rpc.RoutePeerInfos.toObject(message.peerInfos, options);
            if (message.connBitmap != null && message.hasOwnProperty("connBitmap"))
                object.connBitmap = $root.peer_rpc.RouteConnBitmap.toObject(message.connBitmap, options);
            if (message.foreignNetworkInfos != null && message.hasOwnProperty("foreignNetworkInfos"))
                object.foreignNetworkInfos = $root.peer_rpc.RouteForeignNetworkInfos.toObject(message.foreignNetworkInfos, options);
            return object;
        };

        /**
         * Converts this SyncRouteInfoRequest to JSON.
         * @function toJSON
         * @memberof peer_rpc.SyncRouteInfoRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SyncRouteInfoRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SyncRouteInfoRequest
         * @function getTypeUrl
         * @memberof peer_rpc.SyncRouteInfoRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SyncRouteInfoRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/peer_rpc.SyncRouteInfoRequest";
        };

        return SyncRouteInfoRequest;
    })();

    /**
     * SyncRouteInfoError enum.
     * @name peer_rpc.SyncRouteInfoError
     * @enum {number}
     * @property {number} DuplicatePeerId=0 DuplicatePeerId value
     * @property {number} Stopped=1 Stopped value
     */
    peer_rpc.SyncRouteInfoError = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "DuplicatePeerId"] = 0;
        values[valuesById[1] = "Stopped"] = 1;
        return values;
    })();

    peer_rpc.SyncRouteInfoResponse = (function() {

        /**
         * Properties of a SyncRouteInfoResponse.
         * @memberof peer_rpc
         * @interface ISyncRouteInfoResponse
         * @property {boolean|null} [isInitiator] SyncRouteInfoResponse isInitiator
         * @property {number|Long|null} [sessionId] SyncRouteInfoResponse sessionId
         * @property {peer_rpc.SyncRouteInfoError|null} [error] SyncRouteInfoResponse error
         */

        /**
         * Constructs a new SyncRouteInfoResponse.
         * @memberof peer_rpc
         * @classdesc Represents a SyncRouteInfoResponse.
         * @implements ISyncRouteInfoResponse
         * @constructor
         * @param {peer_rpc.ISyncRouteInfoResponse=} [properties] Properties to set
         */
        function SyncRouteInfoResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SyncRouteInfoResponse isInitiator.
         * @member {boolean} isInitiator
         * @memberof peer_rpc.SyncRouteInfoResponse
         * @instance
         */
        SyncRouteInfoResponse.prototype.isInitiator = false;

        /**
         * SyncRouteInfoResponse sessionId.
         * @member {number|Long} sessionId
         * @memberof peer_rpc.SyncRouteInfoResponse
         * @instance
         */
        SyncRouteInfoResponse.prototype.sessionId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * SyncRouteInfoResponse error.
         * @member {peer_rpc.SyncRouteInfoError|null|undefined} error
         * @memberof peer_rpc.SyncRouteInfoResponse
         * @instance
         */
        SyncRouteInfoResponse.prototype.error = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncRouteInfoResponse.prototype, "_error", {
            get: $util.oneOfGetter($oneOfFields = ["error"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new SyncRouteInfoResponse instance using the specified properties.
         * @function create
         * @memberof peer_rpc.SyncRouteInfoResponse
         * @static
         * @param {peer_rpc.ISyncRouteInfoResponse=} [properties] Properties to set
         * @returns {peer_rpc.SyncRouteInfoResponse} SyncRouteInfoResponse instance
         */
        SyncRouteInfoResponse.create = function create(properties) {
            return new SyncRouteInfoResponse(properties);
        };

        /**
         * Encodes the specified SyncRouteInfoResponse message. Does not implicitly {@link peer_rpc.SyncRouteInfoResponse.verify|verify} messages.
         * @function encode
         * @memberof peer_rpc.SyncRouteInfoResponse
         * @static
         * @param {peer_rpc.ISyncRouteInfoResponse} message SyncRouteInfoResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncRouteInfoResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.isInitiator != null && Object.hasOwnProperty.call(message, "isInitiator"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isInitiator);
            if (message.sessionId != null && Object.hasOwnProperty.call(message, "sessionId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.sessionId);
            if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.error);
            return writer;
        };

        /**
         * Encodes the specified SyncRouteInfoResponse message, length delimited. Does not implicitly {@link peer_rpc.SyncRouteInfoResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof peer_rpc.SyncRouteInfoResponse
         * @static
         * @param {peer_rpc.ISyncRouteInfoResponse} message SyncRouteInfoResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncRouteInfoResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SyncRouteInfoResponse message from the specified reader or buffer.
         * @function decode
         * @memberof peer_rpc.SyncRouteInfoResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {peer_rpc.SyncRouteInfoResponse} SyncRouteInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncRouteInfoResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.peer_rpc.SyncRouteInfoResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.isInitiator = reader.bool();
                        break;
                    }
                case 2: {
                        message.sessionId = reader.uint64();
                        break;
                    }
                case 3: {
                        message.error = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SyncRouteInfoResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof peer_rpc.SyncRouteInfoResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {peer_rpc.SyncRouteInfoResponse} SyncRouteInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncRouteInfoResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SyncRouteInfoResponse message.
         * @function verify
         * @memberof peer_rpc.SyncRouteInfoResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SyncRouteInfoResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.isInitiator != null && message.hasOwnProperty("isInitiator"))
                if (typeof message.isInitiator !== "boolean")
                    return "isInitiator: boolean expected";
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                if (!$util.isInteger(message.sessionId) && !(message.sessionId && $util.isInteger(message.sessionId.low) && $util.isInteger(message.sessionId.high)))
                    return "sessionId: integer|Long expected";
            if (message.error != null && message.hasOwnProperty("error")) {
                properties._error = 1;
                switch (message.error) {
                default:
                    return "error: enum value expected";
                case 0:
                case 1:
                    break;
                }
            }
            return null;
        };

        /**
         * Creates a SyncRouteInfoResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof peer_rpc.SyncRouteInfoResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {peer_rpc.SyncRouteInfoResponse} SyncRouteInfoResponse
         */
        SyncRouteInfoResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.peer_rpc.SyncRouteInfoResponse)
                return object;
            let message = new $root.peer_rpc.SyncRouteInfoResponse();
            if (object.isInitiator != null)
                message.isInitiator = Boolean(object.isInitiator);
            if (object.sessionId != null)
                if ($util.Long)
                    (message.sessionId = $util.Long.fromValue(object.sessionId)).unsigned = true;
                else if (typeof object.sessionId === "string")
                    message.sessionId = parseInt(object.sessionId, 10);
                else if (typeof object.sessionId === "number")
                    message.sessionId = object.sessionId;
                else if (typeof object.sessionId === "object")
                    message.sessionId = new $util.LongBits(object.sessionId.low >>> 0, object.sessionId.high >>> 0).toNumber(true);
            switch (object.error) {
            default:
                if (typeof object.error === "number") {
                    message.error = object.error;
                    break;
                }
                break;
            case "DuplicatePeerId":
            case 0:
                message.error = 0;
                break;
            case "Stopped":
            case 1:
                message.error = 1;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a SyncRouteInfoResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof peer_rpc.SyncRouteInfoResponse
         * @static
         * @param {peer_rpc.SyncRouteInfoResponse} message SyncRouteInfoResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SyncRouteInfoResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.isInitiator = false;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.sessionId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sessionId = options.longs === String ? "0" : 0;
            }
            if (message.isInitiator != null && message.hasOwnProperty("isInitiator"))
                object.isInitiator = message.isInitiator;
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                if (typeof message.sessionId === "number")
                    object.sessionId = options.longs === String ? String(message.sessionId) : message.sessionId;
                else
                    object.sessionId = options.longs === String ? $util.Long.prototype.toString.call(message.sessionId) : options.longs === Number ? new $util.LongBits(message.sessionId.low >>> 0, message.sessionId.high >>> 0).toNumber(true) : message.sessionId;
            if (message.error != null && message.hasOwnProperty("error")) {
                object.error = options.enums === String ? $root.peer_rpc.SyncRouteInfoError[message.error] === undefined ? message.error : $root.peer_rpc.SyncRouteInfoError[message.error] : message.error;
                if (options.oneofs)
                    object._error = "error";
            }
            return object;
        };

        /**
         * Converts this SyncRouteInfoResponse to JSON.
         * @function toJSON
         * @memberof peer_rpc.SyncRouteInfoResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SyncRouteInfoResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SyncRouteInfoResponse
         * @function getTypeUrl
         * @memberof peer_rpc.SyncRouteInfoResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SyncRouteInfoResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/peer_rpc.SyncRouteInfoResponse";
        };

        return SyncRouteInfoResponse;
    })();

    peer_rpc.OspfRouteRpc = (function() {

        /**
         * Constructs a new OspfRouteRpc service.
         * @memberof peer_rpc
         * @classdesc Represents an OspfRouteRpc
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function OspfRouteRpc(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (OspfRouteRpc.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = OspfRouteRpc;

        /**
         * Creates new OspfRouteRpc service using the specified rpc implementation.
         * @function create
         * @memberof peer_rpc.OspfRouteRpc
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {OspfRouteRpc} RPC service. Useful where requests and/or responses are streamed.
         */
        OspfRouteRpc.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link peer_rpc.OspfRouteRpc#syncRouteInfo}.
         * @memberof peer_rpc.OspfRouteRpc
         * @typedef SyncRouteInfoCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {peer_rpc.SyncRouteInfoResponse} [response] SyncRouteInfoResponse
         */

        /**
         * Calls SyncRouteInfo.
         * @function syncRouteInfo
         * @memberof peer_rpc.OspfRouteRpc
         * @instance
         * @param {peer_rpc.ISyncRouteInfoRequest} request SyncRouteInfoRequest message or plain object
         * @param {peer_rpc.OspfRouteRpc.SyncRouteInfoCallback} callback Node-style callback called with the error, if any, and SyncRouteInfoResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(OspfRouteRpc.prototype.syncRouteInfo = function syncRouteInfo(request, callback) {
            return this.rpcCall(syncRouteInfo, $root.peer_rpc.SyncRouteInfoRequest, $root.peer_rpc.SyncRouteInfoResponse, request, callback);
        }, "name", { value: "SyncRouteInfo" });

        /**
         * Calls SyncRouteInfo.
         * @function syncRouteInfo
         * @memberof peer_rpc.OspfRouteRpc
         * @instance
         * @param {peer_rpc.ISyncRouteInfoRequest} request SyncRouteInfoRequest message or plain object
         * @returns {Promise<peer_rpc.SyncRouteInfoResponse>} Promise
         * @variation 2
         */

        return OspfRouteRpc;
    })();

    peer_rpc.GetIpListRequest = (function() {

        /**
         * Properties of a GetIpListRequest.
         * @memberof peer_rpc
         * @interface IGetIpListRequest
         */

        /**
         * Constructs a new GetIpListRequest.
         * @memberof peer_rpc
         * @classdesc Represents a GetIpListRequest.
         * @implements IGetIpListRequest
         * @constructor
         * @param {peer_rpc.IGetIpListRequest=} [properties] Properties to set
         */
        function GetIpListRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GetIpListRequest instance using the specified properties.
         * @function create
         * @memberof peer_rpc.GetIpListRequest
         * @static
         * @param {peer_rpc.IGetIpListRequest=} [properties] Properties to set
         * @returns {peer_rpc.GetIpListRequest} GetIpListRequest instance
         */
        GetIpListRequest.create = function create(properties) {
            return new GetIpListRequest(properties);
        };

        /**
         * Encodes the specified GetIpListRequest message. Does not implicitly {@link peer_rpc.GetIpListRequest.verify|verify} messages.
         * @function encode
         * @memberof peer_rpc.GetIpListRequest
         * @static
         * @param {peer_rpc.IGetIpListRequest} message GetIpListRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetIpListRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified GetIpListRequest message, length delimited. Does not implicitly {@link peer_rpc.GetIpListRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof peer_rpc.GetIpListRequest
         * @static
         * @param {peer_rpc.IGetIpListRequest} message GetIpListRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetIpListRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetIpListRequest message from the specified reader or buffer.
         * @function decode
         * @memberof peer_rpc.GetIpListRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {peer_rpc.GetIpListRequest} GetIpListRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetIpListRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.peer_rpc.GetIpListRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetIpListRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof peer_rpc.GetIpListRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {peer_rpc.GetIpListRequest} GetIpListRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetIpListRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetIpListRequest message.
         * @function verify
         * @memberof peer_rpc.GetIpListRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetIpListRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a GetIpListRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof peer_rpc.GetIpListRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {peer_rpc.GetIpListRequest} GetIpListRequest
         */
        GetIpListRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.peer_rpc.GetIpListRequest)
                return object;
            return new $root.peer_rpc.GetIpListRequest();
        };

        /**
         * Creates a plain object from a GetIpListRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof peer_rpc.GetIpListRequest
         * @static
         * @param {peer_rpc.GetIpListRequest} message GetIpListRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetIpListRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this GetIpListRequest to JSON.
         * @function toJSON
         * @memberof peer_rpc.GetIpListRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetIpListRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetIpListRequest
         * @function getTypeUrl
         * @memberof peer_rpc.GetIpListRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetIpListRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/peer_rpc.GetIpListRequest";
        };

        return GetIpListRequest;
    })();

    peer_rpc.GetIpListResponse = (function() {

        /**
         * Properties of a GetIpListResponse.
         * @memberof peer_rpc
         * @interface IGetIpListResponse
         * @property {common.IIpv4Addr|null} [publicIpv4] GetIpListResponse publicIpv4
         * @property {Array.<common.IIpv4Addr>|null} [interfaceIpv4s] GetIpListResponse interfaceIpv4s
         * @property {common.IIpv6Addr|null} [publicIpv6] GetIpListResponse publicIpv6
         * @property {Array.<common.IIpv6Addr>|null} [interfaceIpv6s] GetIpListResponse interfaceIpv6s
         * @property {Array.<common.IUrl>|null} [listeners] GetIpListResponse listeners
         */

        /**
         * Constructs a new GetIpListResponse.
         * @memberof peer_rpc
         * @classdesc Represents a GetIpListResponse.
         * @implements IGetIpListResponse
         * @constructor
         * @param {peer_rpc.IGetIpListResponse=} [properties] Properties to set
         */
        function GetIpListResponse(properties) {
            this.interfaceIpv4s = [];
            this.interfaceIpv6s = [];
            this.listeners = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetIpListResponse publicIpv4.
         * @member {common.IIpv4Addr|null|undefined} publicIpv4
         * @memberof peer_rpc.GetIpListResponse
         * @instance
         */
        GetIpListResponse.prototype.publicIpv4 = null;

        /**
         * GetIpListResponse interfaceIpv4s.
         * @member {Array.<common.IIpv4Addr>} interfaceIpv4s
         * @memberof peer_rpc.GetIpListResponse
         * @instance
         */
        GetIpListResponse.prototype.interfaceIpv4s = $util.emptyArray;

        /**
         * GetIpListResponse publicIpv6.
         * @member {common.IIpv6Addr|null|undefined} publicIpv6
         * @memberof peer_rpc.GetIpListResponse
         * @instance
         */
        GetIpListResponse.prototype.publicIpv6 = null;

        /**
         * GetIpListResponse interfaceIpv6s.
         * @member {Array.<common.IIpv6Addr>} interfaceIpv6s
         * @memberof peer_rpc.GetIpListResponse
         * @instance
         */
        GetIpListResponse.prototype.interfaceIpv6s = $util.emptyArray;

        /**
         * GetIpListResponse listeners.
         * @member {Array.<common.IUrl>} listeners
         * @memberof peer_rpc.GetIpListResponse
         * @instance
         */
        GetIpListResponse.prototype.listeners = $util.emptyArray;

        /**
         * Creates a new GetIpListResponse instance using the specified properties.
         * @function create
         * @memberof peer_rpc.GetIpListResponse
         * @static
         * @param {peer_rpc.IGetIpListResponse=} [properties] Properties to set
         * @returns {peer_rpc.GetIpListResponse} GetIpListResponse instance
         */
        GetIpListResponse.create = function create(properties) {
            return new GetIpListResponse(properties);
        };

        /**
         * Encodes the specified GetIpListResponse message. Does not implicitly {@link peer_rpc.GetIpListResponse.verify|verify} messages.
         * @function encode
         * @memberof peer_rpc.GetIpListResponse
         * @static
         * @param {peer_rpc.IGetIpListResponse} message GetIpListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetIpListResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.publicIpv4 != null && Object.hasOwnProperty.call(message, "publicIpv4"))
                $root.common.Ipv4Addr.encode(message.publicIpv4, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.interfaceIpv4s != null && message.interfaceIpv4s.length)
                for (let i = 0; i < message.interfaceIpv4s.length; ++i)
                    $root.common.Ipv4Addr.encode(message.interfaceIpv4s[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.publicIpv6 != null && Object.hasOwnProperty.call(message, "publicIpv6"))
                $root.common.Ipv6Addr.encode(message.publicIpv6, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.interfaceIpv6s != null && message.interfaceIpv6s.length)
                for (let i = 0; i < message.interfaceIpv6s.length; ++i)
                    $root.common.Ipv6Addr.encode(message.interfaceIpv6s[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.listeners != null && message.listeners.length)
                for (let i = 0; i < message.listeners.length; ++i)
                    $root.common.Url.encode(message.listeners[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetIpListResponse message, length delimited. Does not implicitly {@link peer_rpc.GetIpListResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof peer_rpc.GetIpListResponse
         * @static
         * @param {peer_rpc.IGetIpListResponse} message GetIpListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetIpListResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetIpListResponse message from the specified reader or buffer.
         * @function decode
         * @memberof peer_rpc.GetIpListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {peer_rpc.GetIpListResponse} GetIpListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetIpListResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.peer_rpc.GetIpListResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.publicIpv4 = $root.common.Ipv4Addr.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        if (!(message.interfaceIpv4s && message.interfaceIpv4s.length))
                            message.interfaceIpv4s = [];
                        message.interfaceIpv4s.push($root.common.Ipv4Addr.decode(reader, reader.uint32()));
                        break;
                    }
                case 3: {
                        message.publicIpv6 = $root.common.Ipv6Addr.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        if (!(message.interfaceIpv6s && message.interfaceIpv6s.length))
                            message.interfaceIpv6s = [];
                        message.interfaceIpv6s.push($root.common.Ipv6Addr.decode(reader, reader.uint32()));
                        break;
                    }
                case 5: {
                        if (!(message.listeners && message.listeners.length))
                            message.listeners = [];
                        message.listeners.push($root.common.Url.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetIpListResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof peer_rpc.GetIpListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {peer_rpc.GetIpListResponse} GetIpListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetIpListResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetIpListResponse message.
         * @function verify
         * @memberof peer_rpc.GetIpListResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetIpListResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.publicIpv4 != null && message.hasOwnProperty("publicIpv4")) {
                let error = $root.common.Ipv4Addr.verify(message.publicIpv4);
                if (error)
                    return "publicIpv4." + error;
            }
            if (message.interfaceIpv4s != null && message.hasOwnProperty("interfaceIpv4s")) {
                if (!Array.isArray(message.interfaceIpv4s))
                    return "interfaceIpv4s: array expected";
                for (let i = 0; i < message.interfaceIpv4s.length; ++i) {
                    let error = $root.common.Ipv4Addr.verify(message.interfaceIpv4s[i]);
                    if (error)
                        return "interfaceIpv4s." + error;
                }
            }
            if (message.publicIpv6 != null && message.hasOwnProperty("publicIpv6")) {
                let error = $root.common.Ipv6Addr.verify(message.publicIpv6);
                if (error)
                    return "publicIpv6." + error;
            }
            if (message.interfaceIpv6s != null && message.hasOwnProperty("interfaceIpv6s")) {
                if (!Array.isArray(message.interfaceIpv6s))
                    return "interfaceIpv6s: array expected";
                for (let i = 0; i < message.interfaceIpv6s.length; ++i) {
                    let error = $root.common.Ipv6Addr.verify(message.interfaceIpv6s[i]);
                    if (error)
                        return "interfaceIpv6s." + error;
                }
            }
            if (message.listeners != null && message.hasOwnProperty("listeners")) {
                if (!Array.isArray(message.listeners))
                    return "listeners: array expected";
                for (let i = 0; i < message.listeners.length; ++i) {
                    let error = $root.common.Url.verify(message.listeners[i]);
                    if (error)
                        return "listeners." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetIpListResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof peer_rpc.GetIpListResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {peer_rpc.GetIpListResponse} GetIpListResponse
         */
        GetIpListResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.peer_rpc.GetIpListResponse)
                return object;
            let message = new $root.peer_rpc.GetIpListResponse();
            if (object.publicIpv4 != null) {
                if (typeof object.publicIpv4 !== "object")
                    throw TypeError(".peer_rpc.GetIpListResponse.publicIpv4: object expected");
                message.publicIpv4 = $root.common.Ipv4Addr.fromObject(object.publicIpv4);
            }
            if (object.interfaceIpv4s) {
                if (!Array.isArray(object.interfaceIpv4s))
                    throw TypeError(".peer_rpc.GetIpListResponse.interfaceIpv4s: array expected");
                message.interfaceIpv4s = [];
                for (let i = 0; i < object.interfaceIpv4s.length; ++i) {
                    if (typeof object.interfaceIpv4s[i] !== "object")
                        throw TypeError(".peer_rpc.GetIpListResponse.interfaceIpv4s: object expected");
                    message.interfaceIpv4s[i] = $root.common.Ipv4Addr.fromObject(object.interfaceIpv4s[i]);
                }
            }
            if (object.publicIpv6 != null) {
                if (typeof object.publicIpv6 !== "object")
                    throw TypeError(".peer_rpc.GetIpListResponse.publicIpv6: object expected");
                message.publicIpv6 = $root.common.Ipv6Addr.fromObject(object.publicIpv6);
            }
            if (object.interfaceIpv6s) {
                if (!Array.isArray(object.interfaceIpv6s))
                    throw TypeError(".peer_rpc.GetIpListResponse.interfaceIpv6s: array expected");
                message.interfaceIpv6s = [];
                for (let i = 0; i < object.interfaceIpv6s.length; ++i) {
                    if (typeof object.interfaceIpv6s[i] !== "object")
                        throw TypeError(".peer_rpc.GetIpListResponse.interfaceIpv6s: object expected");
                    message.interfaceIpv6s[i] = $root.common.Ipv6Addr.fromObject(object.interfaceIpv6s[i]);
                }
            }
            if (object.listeners) {
                if (!Array.isArray(object.listeners))
                    throw TypeError(".peer_rpc.GetIpListResponse.listeners: array expected");
                message.listeners = [];
                for (let i = 0; i < object.listeners.length; ++i) {
                    if (typeof object.listeners[i] !== "object")
                        throw TypeError(".peer_rpc.GetIpListResponse.listeners: object expected");
                    message.listeners[i] = $root.common.Url.fromObject(object.listeners[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetIpListResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof peer_rpc.GetIpListResponse
         * @static
         * @param {peer_rpc.GetIpListResponse} message GetIpListResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetIpListResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.interfaceIpv4s = [];
                object.interfaceIpv6s = [];
                object.listeners = [];
            }
            if (options.defaults) {
                object.publicIpv4 = null;
                object.publicIpv6 = null;
            }
            if (message.publicIpv4 != null && message.hasOwnProperty("publicIpv4"))
                object.publicIpv4 = $root.common.Ipv4Addr.toObject(message.publicIpv4, options);
            if (message.interfaceIpv4s && message.interfaceIpv4s.length) {
                object.interfaceIpv4s = [];
                for (let j = 0; j < message.interfaceIpv4s.length; ++j)
                    object.interfaceIpv4s[j] = $root.common.Ipv4Addr.toObject(message.interfaceIpv4s[j], options);
            }
            if (message.publicIpv6 != null && message.hasOwnProperty("publicIpv6"))
                object.publicIpv6 = $root.common.Ipv6Addr.toObject(message.publicIpv6, options);
            if (message.interfaceIpv6s && message.interfaceIpv6s.length) {
                object.interfaceIpv6s = [];
                for (let j = 0; j < message.interfaceIpv6s.length; ++j)
                    object.interfaceIpv6s[j] = $root.common.Ipv6Addr.toObject(message.interfaceIpv6s[j], options);
            }
            if (message.listeners && message.listeners.length) {
                object.listeners = [];
                for (let j = 0; j < message.listeners.length; ++j)
                    object.listeners[j] = $root.common.Url.toObject(message.listeners[j], options);
            }
            return object;
        };

        /**
         * Converts this GetIpListResponse to JSON.
         * @function toJSON
         * @memberof peer_rpc.GetIpListResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetIpListResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetIpListResponse
         * @function getTypeUrl
         * @memberof peer_rpc.GetIpListResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetIpListResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/peer_rpc.GetIpListResponse";
        };

        return GetIpListResponse;
    })();

    peer_rpc.SendV6HolePunchPacketRequest = (function() {

        /**
         * Properties of a SendV6HolePunchPacketRequest.
         * @memberof peer_rpc
         * @interface ISendV6HolePunchPacketRequest
         * @property {common.ISocketAddr|null} [connectorAddr] SendV6HolePunchPacketRequest connectorAddr
         * @property {number|null} [listenerPort] SendV6HolePunchPacketRequest listenerPort
         */

        /**
         * Constructs a new SendV6HolePunchPacketRequest.
         * @memberof peer_rpc
         * @classdesc Represents a SendV6HolePunchPacketRequest.
         * @implements ISendV6HolePunchPacketRequest
         * @constructor
         * @param {peer_rpc.ISendV6HolePunchPacketRequest=} [properties] Properties to set
         */
        function SendV6HolePunchPacketRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendV6HolePunchPacketRequest connectorAddr.
         * @member {common.ISocketAddr|null|undefined} connectorAddr
         * @memberof peer_rpc.SendV6HolePunchPacketRequest
         * @instance
         */
        SendV6HolePunchPacketRequest.prototype.connectorAddr = null;

        /**
         * SendV6HolePunchPacketRequest listenerPort.
         * @member {number} listenerPort
         * @memberof peer_rpc.SendV6HolePunchPacketRequest
         * @instance
         */
        SendV6HolePunchPacketRequest.prototype.listenerPort = 0;

        /**
         * Creates a new SendV6HolePunchPacketRequest instance using the specified properties.
         * @function create
         * @memberof peer_rpc.SendV6HolePunchPacketRequest
         * @static
         * @param {peer_rpc.ISendV6HolePunchPacketRequest=} [properties] Properties to set
         * @returns {peer_rpc.SendV6HolePunchPacketRequest} SendV6HolePunchPacketRequest instance
         */
        SendV6HolePunchPacketRequest.create = function create(properties) {
            return new SendV6HolePunchPacketRequest(properties);
        };

        /**
         * Encodes the specified SendV6HolePunchPacketRequest message. Does not implicitly {@link peer_rpc.SendV6HolePunchPacketRequest.verify|verify} messages.
         * @function encode
         * @memberof peer_rpc.SendV6HolePunchPacketRequest
         * @static
         * @param {peer_rpc.ISendV6HolePunchPacketRequest} message SendV6HolePunchPacketRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendV6HolePunchPacketRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.connectorAddr != null && Object.hasOwnProperty.call(message, "connectorAddr"))
                $root.common.SocketAddr.encode(message.connectorAddr, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.listenerPort != null && Object.hasOwnProperty.call(message, "listenerPort"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.listenerPort);
            return writer;
        };

        /**
         * Encodes the specified SendV6HolePunchPacketRequest message, length delimited. Does not implicitly {@link peer_rpc.SendV6HolePunchPacketRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof peer_rpc.SendV6HolePunchPacketRequest
         * @static
         * @param {peer_rpc.ISendV6HolePunchPacketRequest} message SendV6HolePunchPacketRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendV6HolePunchPacketRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendV6HolePunchPacketRequest message from the specified reader or buffer.
         * @function decode
         * @memberof peer_rpc.SendV6HolePunchPacketRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {peer_rpc.SendV6HolePunchPacketRequest} SendV6HolePunchPacketRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendV6HolePunchPacketRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.peer_rpc.SendV6HolePunchPacketRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.connectorAddr = $root.common.SocketAddr.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.listenerPort = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendV6HolePunchPacketRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof peer_rpc.SendV6HolePunchPacketRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {peer_rpc.SendV6HolePunchPacketRequest} SendV6HolePunchPacketRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendV6HolePunchPacketRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendV6HolePunchPacketRequest message.
         * @function verify
         * @memberof peer_rpc.SendV6HolePunchPacketRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendV6HolePunchPacketRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.connectorAddr != null && message.hasOwnProperty("connectorAddr")) {
                let error = $root.common.SocketAddr.verify(message.connectorAddr);
                if (error)
                    return "connectorAddr." + error;
            }
            if (message.listenerPort != null && message.hasOwnProperty("listenerPort"))
                if (!$util.isInteger(message.listenerPort))
                    return "listenerPort: integer expected";
            return null;
        };

        /**
         * Creates a SendV6HolePunchPacketRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof peer_rpc.SendV6HolePunchPacketRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {peer_rpc.SendV6HolePunchPacketRequest} SendV6HolePunchPacketRequest
         */
        SendV6HolePunchPacketRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.peer_rpc.SendV6HolePunchPacketRequest)
                return object;
            let message = new $root.peer_rpc.SendV6HolePunchPacketRequest();
            if (object.connectorAddr != null) {
                if (typeof object.connectorAddr !== "object")
                    throw TypeError(".peer_rpc.SendV6HolePunchPacketRequest.connectorAddr: object expected");
                message.connectorAddr = $root.common.SocketAddr.fromObject(object.connectorAddr);
            }
            if (object.listenerPort != null)
                message.listenerPort = object.listenerPort >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a SendV6HolePunchPacketRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof peer_rpc.SendV6HolePunchPacketRequest
         * @static
         * @param {peer_rpc.SendV6HolePunchPacketRequest} message SendV6HolePunchPacketRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendV6HolePunchPacketRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.connectorAddr = null;
                object.listenerPort = 0;
            }
            if (message.connectorAddr != null && message.hasOwnProperty("connectorAddr"))
                object.connectorAddr = $root.common.SocketAddr.toObject(message.connectorAddr, options);
            if (message.listenerPort != null && message.hasOwnProperty("listenerPort"))
                object.listenerPort = message.listenerPort;
            return object;
        };

        /**
         * Converts this SendV6HolePunchPacketRequest to JSON.
         * @function toJSON
         * @memberof peer_rpc.SendV6HolePunchPacketRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendV6HolePunchPacketRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SendV6HolePunchPacketRequest
         * @function getTypeUrl
         * @memberof peer_rpc.SendV6HolePunchPacketRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SendV6HolePunchPacketRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/peer_rpc.SendV6HolePunchPacketRequest";
        };

        return SendV6HolePunchPacketRequest;
    })();

    peer_rpc.DirectConnectorRpc = (function() {

        /**
         * Constructs a new DirectConnectorRpc service.
         * @memberof peer_rpc
         * @classdesc Represents a DirectConnectorRpc
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function DirectConnectorRpc(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (DirectConnectorRpc.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = DirectConnectorRpc;

        /**
         * Creates new DirectConnectorRpc service using the specified rpc implementation.
         * @function create
         * @memberof peer_rpc.DirectConnectorRpc
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {DirectConnectorRpc} RPC service. Useful where requests and/or responses are streamed.
         */
        DirectConnectorRpc.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link peer_rpc.DirectConnectorRpc#getIpList}.
         * @memberof peer_rpc.DirectConnectorRpc
         * @typedef GetIpListCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {peer_rpc.GetIpListResponse} [response] GetIpListResponse
         */

        /**
         * Calls GetIpList.
         * @function getIpList
         * @memberof peer_rpc.DirectConnectorRpc
         * @instance
         * @param {peer_rpc.IGetIpListRequest} request GetIpListRequest message or plain object
         * @param {peer_rpc.DirectConnectorRpc.GetIpListCallback} callback Node-style callback called with the error, if any, and GetIpListResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(DirectConnectorRpc.prototype.getIpList = function getIpList(request, callback) {
            return this.rpcCall(getIpList, $root.peer_rpc.GetIpListRequest, $root.peer_rpc.GetIpListResponse, request, callback);
        }, "name", { value: "GetIpList" });

        /**
         * Calls GetIpList.
         * @function getIpList
         * @memberof peer_rpc.DirectConnectorRpc
         * @instance
         * @param {peer_rpc.IGetIpListRequest} request GetIpListRequest message or plain object
         * @returns {Promise<peer_rpc.GetIpListResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link peer_rpc.DirectConnectorRpc#sendV6HolePunchPacket}.
         * @memberof peer_rpc.DirectConnectorRpc
         * @typedef SendV6HolePunchPacketCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {common.Void} [response] Void
         */

        /**
         * Calls SendV6HolePunchPacket.
         * @function sendV6HolePunchPacket
         * @memberof peer_rpc.DirectConnectorRpc
         * @instance
         * @param {peer_rpc.ISendV6HolePunchPacketRequest} request SendV6HolePunchPacketRequest message or plain object
         * @param {peer_rpc.DirectConnectorRpc.SendV6HolePunchPacketCallback} callback Node-style callback called with the error, if any, and Void
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(DirectConnectorRpc.prototype.sendV6HolePunchPacket = function sendV6HolePunchPacket(request, callback) {
            return this.rpcCall(sendV6HolePunchPacket, $root.peer_rpc.SendV6HolePunchPacketRequest, $root.common.Void, request, callback);
        }, "name", { value: "SendV6HolePunchPacket" });

        /**
         * Calls SendV6HolePunchPacket.
         * @function sendV6HolePunchPacket
         * @memberof peer_rpc.DirectConnectorRpc
         * @instance
         * @param {peer_rpc.ISendV6HolePunchPacketRequest} request SendV6HolePunchPacketRequest message or plain object
         * @returns {Promise<common.Void>} Promise
         * @variation 2
         */

        return DirectConnectorRpc;
    })();

    peer_rpc.SelectPunchListenerRequest = (function() {

        /**
         * Properties of a SelectPunchListenerRequest.
         * @memberof peer_rpc
         * @interface ISelectPunchListenerRequest
         * @property {boolean|null} [forceNew] SelectPunchListenerRequest forceNew
         */

        /**
         * Constructs a new SelectPunchListenerRequest.
         * @memberof peer_rpc
         * @classdesc Represents a SelectPunchListenerRequest.
         * @implements ISelectPunchListenerRequest
         * @constructor
         * @param {peer_rpc.ISelectPunchListenerRequest=} [properties] Properties to set
         */
        function SelectPunchListenerRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SelectPunchListenerRequest forceNew.
         * @member {boolean} forceNew
         * @memberof peer_rpc.SelectPunchListenerRequest
         * @instance
         */
        SelectPunchListenerRequest.prototype.forceNew = false;

        /**
         * Creates a new SelectPunchListenerRequest instance using the specified properties.
         * @function create
         * @memberof peer_rpc.SelectPunchListenerRequest
         * @static
         * @param {peer_rpc.ISelectPunchListenerRequest=} [properties] Properties to set
         * @returns {peer_rpc.SelectPunchListenerRequest} SelectPunchListenerRequest instance
         */
        SelectPunchListenerRequest.create = function create(properties) {
            return new SelectPunchListenerRequest(properties);
        };

        /**
         * Encodes the specified SelectPunchListenerRequest message. Does not implicitly {@link peer_rpc.SelectPunchListenerRequest.verify|verify} messages.
         * @function encode
         * @memberof peer_rpc.SelectPunchListenerRequest
         * @static
         * @param {peer_rpc.ISelectPunchListenerRequest} message SelectPunchListenerRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SelectPunchListenerRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.forceNew != null && Object.hasOwnProperty.call(message, "forceNew"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.forceNew);
            return writer;
        };

        /**
         * Encodes the specified SelectPunchListenerRequest message, length delimited. Does not implicitly {@link peer_rpc.SelectPunchListenerRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof peer_rpc.SelectPunchListenerRequest
         * @static
         * @param {peer_rpc.ISelectPunchListenerRequest} message SelectPunchListenerRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SelectPunchListenerRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SelectPunchListenerRequest message from the specified reader or buffer.
         * @function decode
         * @memberof peer_rpc.SelectPunchListenerRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {peer_rpc.SelectPunchListenerRequest} SelectPunchListenerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SelectPunchListenerRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.peer_rpc.SelectPunchListenerRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.forceNew = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SelectPunchListenerRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof peer_rpc.SelectPunchListenerRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {peer_rpc.SelectPunchListenerRequest} SelectPunchListenerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SelectPunchListenerRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SelectPunchListenerRequest message.
         * @function verify
         * @memberof peer_rpc.SelectPunchListenerRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SelectPunchListenerRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.forceNew != null && message.hasOwnProperty("forceNew"))
                if (typeof message.forceNew !== "boolean")
                    return "forceNew: boolean expected";
            return null;
        };

        /**
         * Creates a SelectPunchListenerRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof peer_rpc.SelectPunchListenerRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {peer_rpc.SelectPunchListenerRequest} SelectPunchListenerRequest
         */
        SelectPunchListenerRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.peer_rpc.SelectPunchListenerRequest)
                return object;
            let message = new $root.peer_rpc.SelectPunchListenerRequest();
            if (object.forceNew != null)
                message.forceNew = Boolean(object.forceNew);
            return message;
        };

        /**
         * Creates a plain object from a SelectPunchListenerRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof peer_rpc.SelectPunchListenerRequest
         * @static
         * @param {peer_rpc.SelectPunchListenerRequest} message SelectPunchListenerRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SelectPunchListenerRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.forceNew = false;
            if (message.forceNew != null && message.hasOwnProperty("forceNew"))
                object.forceNew = message.forceNew;
            return object;
        };

        /**
         * Converts this SelectPunchListenerRequest to JSON.
         * @function toJSON
         * @memberof peer_rpc.SelectPunchListenerRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SelectPunchListenerRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SelectPunchListenerRequest
         * @function getTypeUrl
         * @memberof peer_rpc.SelectPunchListenerRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SelectPunchListenerRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/peer_rpc.SelectPunchListenerRequest";
        };

        return SelectPunchListenerRequest;
    })();

    peer_rpc.SelectPunchListenerResponse = (function() {

        /**
         * Properties of a SelectPunchListenerResponse.
         * @memberof peer_rpc
         * @interface ISelectPunchListenerResponse
         * @property {common.ISocketAddr|null} [listenerMappedAddr] SelectPunchListenerResponse listenerMappedAddr
         */

        /**
         * Constructs a new SelectPunchListenerResponse.
         * @memberof peer_rpc
         * @classdesc Represents a SelectPunchListenerResponse.
         * @implements ISelectPunchListenerResponse
         * @constructor
         * @param {peer_rpc.ISelectPunchListenerResponse=} [properties] Properties to set
         */
        function SelectPunchListenerResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SelectPunchListenerResponse listenerMappedAddr.
         * @member {common.ISocketAddr|null|undefined} listenerMappedAddr
         * @memberof peer_rpc.SelectPunchListenerResponse
         * @instance
         */
        SelectPunchListenerResponse.prototype.listenerMappedAddr = null;

        /**
         * Creates a new SelectPunchListenerResponse instance using the specified properties.
         * @function create
         * @memberof peer_rpc.SelectPunchListenerResponse
         * @static
         * @param {peer_rpc.ISelectPunchListenerResponse=} [properties] Properties to set
         * @returns {peer_rpc.SelectPunchListenerResponse} SelectPunchListenerResponse instance
         */
        SelectPunchListenerResponse.create = function create(properties) {
            return new SelectPunchListenerResponse(properties);
        };

        /**
         * Encodes the specified SelectPunchListenerResponse message. Does not implicitly {@link peer_rpc.SelectPunchListenerResponse.verify|verify} messages.
         * @function encode
         * @memberof peer_rpc.SelectPunchListenerResponse
         * @static
         * @param {peer_rpc.ISelectPunchListenerResponse} message SelectPunchListenerResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SelectPunchListenerResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.listenerMappedAddr != null && Object.hasOwnProperty.call(message, "listenerMappedAddr"))
                $root.common.SocketAddr.encode(message.listenerMappedAddr, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SelectPunchListenerResponse message, length delimited. Does not implicitly {@link peer_rpc.SelectPunchListenerResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof peer_rpc.SelectPunchListenerResponse
         * @static
         * @param {peer_rpc.ISelectPunchListenerResponse} message SelectPunchListenerResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SelectPunchListenerResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SelectPunchListenerResponse message from the specified reader or buffer.
         * @function decode
         * @memberof peer_rpc.SelectPunchListenerResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {peer_rpc.SelectPunchListenerResponse} SelectPunchListenerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SelectPunchListenerResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.peer_rpc.SelectPunchListenerResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.listenerMappedAddr = $root.common.SocketAddr.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SelectPunchListenerResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof peer_rpc.SelectPunchListenerResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {peer_rpc.SelectPunchListenerResponse} SelectPunchListenerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SelectPunchListenerResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SelectPunchListenerResponse message.
         * @function verify
         * @memberof peer_rpc.SelectPunchListenerResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SelectPunchListenerResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.listenerMappedAddr != null && message.hasOwnProperty("listenerMappedAddr")) {
                let error = $root.common.SocketAddr.verify(message.listenerMappedAddr);
                if (error)
                    return "listenerMappedAddr." + error;
            }
            return null;
        };

        /**
         * Creates a SelectPunchListenerResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof peer_rpc.SelectPunchListenerResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {peer_rpc.SelectPunchListenerResponse} SelectPunchListenerResponse
         */
        SelectPunchListenerResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.peer_rpc.SelectPunchListenerResponse)
                return object;
            let message = new $root.peer_rpc.SelectPunchListenerResponse();
            if (object.listenerMappedAddr != null) {
                if (typeof object.listenerMappedAddr !== "object")
                    throw TypeError(".peer_rpc.SelectPunchListenerResponse.listenerMappedAddr: object expected");
                message.listenerMappedAddr = $root.common.SocketAddr.fromObject(object.listenerMappedAddr);
            }
            return message;
        };

        /**
         * Creates a plain object from a SelectPunchListenerResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof peer_rpc.SelectPunchListenerResponse
         * @static
         * @param {peer_rpc.SelectPunchListenerResponse} message SelectPunchListenerResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SelectPunchListenerResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.listenerMappedAddr = null;
            if (message.listenerMappedAddr != null && message.hasOwnProperty("listenerMappedAddr"))
                object.listenerMappedAddr = $root.common.SocketAddr.toObject(message.listenerMappedAddr, options);
            return object;
        };

        /**
         * Converts this SelectPunchListenerResponse to JSON.
         * @function toJSON
         * @memberof peer_rpc.SelectPunchListenerResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SelectPunchListenerResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SelectPunchListenerResponse
         * @function getTypeUrl
         * @memberof peer_rpc.SelectPunchListenerResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SelectPunchListenerResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/peer_rpc.SelectPunchListenerResponse";
        };

        return SelectPunchListenerResponse;
    })();

    peer_rpc.SendPunchPacketConeRequest = (function() {

        /**
         * Properties of a SendPunchPacketConeRequest.
         * @memberof peer_rpc
         * @interface ISendPunchPacketConeRequest
         * @property {common.ISocketAddr|null} [listenerMappedAddr] SendPunchPacketConeRequest listenerMappedAddr
         * @property {common.ISocketAddr|null} [destAddr] SendPunchPacketConeRequest destAddr
         * @property {number|null} [transactionId] SendPunchPacketConeRequest transactionId
         * @property {number|null} [packetCountPerBatch] SendPunchPacketConeRequest packetCountPerBatch
         * @property {number|null} [packetBatchCount] SendPunchPacketConeRequest packetBatchCount
         * @property {number|null} [packetIntervalMs] SendPunchPacketConeRequest packetIntervalMs
         */

        /**
         * Constructs a new SendPunchPacketConeRequest.
         * @memberof peer_rpc
         * @classdesc Represents a SendPunchPacketConeRequest.
         * @implements ISendPunchPacketConeRequest
         * @constructor
         * @param {peer_rpc.ISendPunchPacketConeRequest=} [properties] Properties to set
         */
        function SendPunchPacketConeRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendPunchPacketConeRequest listenerMappedAddr.
         * @member {common.ISocketAddr|null|undefined} listenerMappedAddr
         * @memberof peer_rpc.SendPunchPacketConeRequest
         * @instance
         */
        SendPunchPacketConeRequest.prototype.listenerMappedAddr = null;

        /**
         * SendPunchPacketConeRequest destAddr.
         * @member {common.ISocketAddr|null|undefined} destAddr
         * @memberof peer_rpc.SendPunchPacketConeRequest
         * @instance
         */
        SendPunchPacketConeRequest.prototype.destAddr = null;

        /**
         * SendPunchPacketConeRequest transactionId.
         * @member {number} transactionId
         * @memberof peer_rpc.SendPunchPacketConeRequest
         * @instance
         */
        SendPunchPacketConeRequest.prototype.transactionId = 0;

        /**
         * SendPunchPacketConeRequest packetCountPerBatch.
         * @member {number} packetCountPerBatch
         * @memberof peer_rpc.SendPunchPacketConeRequest
         * @instance
         */
        SendPunchPacketConeRequest.prototype.packetCountPerBatch = 0;

        /**
         * SendPunchPacketConeRequest packetBatchCount.
         * @member {number} packetBatchCount
         * @memberof peer_rpc.SendPunchPacketConeRequest
         * @instance
         */
        SendPunchPacketConeRequest.prototype.packetBatchCount = 0;

        /**
         * SendPunchPacketConeRequest packetIntervalMs.
         * @member {number} packetIntervalMs
         * @memberof peer_rpc.SendPunchPacketConeRequest
         * @instance
         */
        SendPunchPacketConeRequest.prototype.packetIntervalMs = 0;

        /**
         * Creates a new SendPunchPacketConeRequest instance using the specified properties.
         * @function create
         * @memberof peer_rpc.SendPunchPacketConeRequest
         * @static
         * @param {peer_rpc.ISendPunchPacketConeRequest=} [properties] Properties to set
         * @returns {peer_rpc.SendPunchPacketConeRequest} SendPunchPacketConeRequest instance
         */
        SendPunchPacketConeRequest.create = function create(properties) {
            return new SendPunchPacketConeRequest(properties);
        };

        /**
         * Encodes the specified SendPunchPacketConeRequest message. Does not implicitly {@link peer_rpc.SendPunchPacketConeRequest.verify|verify} messages.
         * @function encode
         * @memberof peer_rpc.SendPunchPacketConeRequest
         * @static
         * @param {peer_rpc.ISendPunchPacketConeRequest} message SendPunchPacketConeRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendPunchPacketConeRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.listenerMappedAddr != null && Object.hasOwnProperty.call(message, "listenerMappedAddr"))
                $root.common.SocketAddr.encode(message.listenerMappedAddr, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.destAddr != null && Object.hasOwnProperty.call(message, "destAddr"))
                $root.common.SocketAddr.encode(message.destAddr, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.transactionId != null && Object.hasOwnProperty.call(message, "transactionId"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.transactionId);
            if (message.packetCountPerBatch != null && Object.hasOwnProperty.call(message, "packetCountPerBatch"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.packetCountPerBatch);
            if (message.packetBatchCount != null && Object.hasOwnProperty.call(message, "packetBatchCount"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.packetBatchCount);
            if (message.packetIntervalMs != null && Object.hasOwnProperty.call(message, "packetIntervalMs"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.packetIntervalMs);
            return writer;
        };

        /**
         * Encodes the specified SendPunchPacketConeRequest message, length delimited. Does not implicitly {@link peer_rpc.SendPunchPacketConeRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof peer_rpc.SendPunchPacketConeRequest
         * @static
         * @param {peer_rpc.ISendPunchPacketConeRequest} message SendPunchPacketConeRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendPunchPacketConeRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendPunchPacketConeRequest message from the specified reader or buffer.
         * @function decode
         * @memberof peer_rpc.SendPunchPacketConeRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {peer_rpc.SendPunchPacketConeRequest} SendPunchPacketConeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendPunchPacketConeRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.peer_rpc.SendPunchPacketConeRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.listenerMappedAddr = $root.common.SocketAddr.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.destAddr = $root.common.SocketAddr.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.transactionId = reader.uint32();
                        break;
                    }
                case 4: {
                        message.packetCountPerBatch = reader.uint32();
                        break;
                    }
                case 5: {
                        message.packetBatchCount = reader.uint32();
                        break;
                    }
                case 6: {
                        message.packetIntervalMs = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendPunchPacketConeRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof peer_rpc.SendPunchPacketConeRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {peer_rpc.SendPunchPacketConeRequest} SendPunchPacketConeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendPunchPacketConeRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendPunchPacketConeRequest message.
         * @function verify
         * @memberof peer_rpc.SendPunchPacketConeRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendPunchPacketConeRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.listenerMappedAddr != null && message.hasOwnProperty("listenerMappedAddr")) {
                let error = $root.common.SocketAddr.verify(message.listenerMappedAddr);
                if (error)
                    return "listenerMappedAddr." + error;
            }
            if (message.destAddr != null && message.hasOwnProperty("destAddr")) {
                let error = $root.common.SocketAddr.verify(message.destAddr);
                if (error)
                    return "destAddr." + error;
            }
            if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                if (!$util.isInteger(message.transactionId))
                    return "transactionId: integer expected";
            if (message.packetCountPerBatch != null && message.hasOwnProperty("packetCountPerBatch"))
                if (!$util.isInteger(message.packetCountPerBatch))
                    return "packetCountPerBatch: integer expected";
            if (message.packetBatchCount != null && message.hasOwnProperty("packetBatchCount"))
                if (!$util.isInteger(message.packetBatchCount))
                    return "packetBatchCount: integer expected";
            if (message.packetIntervalMs != null && message.hasOwnProperty("packetIntervalMs"))
                if (!$util.isInteger(message.packetIntervalMs))
                    return "packetIntervalMs: integer expected";
            return null;
        };

        /**
         * Creates a SendPunchPacketConeRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof peer_rpc.SendPunchPacketConeRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {peer_rpc.SendPunchPacketConeRequest} SendPunchPacketConeRequest
         */
        SendPunchPacketConeRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.peer_rpc.SendPunchPacketConeRequest)
                return object;
            let message = new $root.peer_rpc.SendPunchPacketConeRequest();
            if (object.listenerMappedAddr != null) {
                if (typeof object.listenerMappedAddr !== "object")
                    throw TypeError(".peer_rpc.SendPunchPacketConeRequest.listenerMappedAddr: object expected");
                message.listenerMappedAddr = $root.common.SocketAddr.fromObject(object.listenerMappedAddr);
            }
            if (object.destAddr != null) {
                if (typeof object.destAddr !== "object")
                    throw TypeError(".peer_rpc.SendPunchPacketConeRequest.destAddr: object expected");
                message.destAddr = $root.common.SocketAddr.fromObject(object.destAddr);
            }
            if (object.transactionId != null)
                message.transactionId = object.transactionId >>> 0;
            if (object.packetCountPerBatch != null)
                message.packetCountPerBatch = object.packetCountPerBatch >>> 0;
            if (object.packetBatchCount != null)
                message.packetBatchCount = object.packetBatchCount >>> 0;
            if (object.packetIntervalMs != null)
                message.packetIntervalMs = object.packetIntervalMs >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a SendPunchPacketConeRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof peer_rpc.SendPunchPacketConeRequest
         * @static
         * @param {peer_rpc.SendPunchPacketConeRequest} message SendPunchPacketConeRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendPunchPacketConeRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.listenerMappedAddr = null;
                object.destAddr = null;
                object.transactionId = 0;
                object.packetCountPerBatch = 0;
                object.packetBatchCount = 0;
                object.packetIntervalMs = 0;
            }
            if (message.listenerMappedAddr != null && message.hasOwnProperty("listenerMappedAddr"))
                object.listenerMappedAddr = $root.common.SocketAddr.toObject(message.listenerMappedAddr, options);
            if (message.destAddr != null && message.hasOwnProperty("destAddr"))
                object.destAddr = $root.common.SocketAddr.toObject(message.destAddr, options);
            if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                object.transactionId = message.transactionId;
            if (message.packetCountPerBatch != null && message.hasOwnProperty("packetCountPerBatch"))
                object.packetCountPerBatch = message.packetCountPerBatch;
            if (message.packetBatchCount != null && message.hasOwnProperty("packetBatchCount"))
                object.packetBatchCount = message.packetBatchCount;
            if (message.packetIntervalMs != null && message.hasOwnProperty("packetIntervalMs"))
                object.packetIntervalMs = message.packetIntervalMs;
            return object;
        };

        /**
         * Converts this SendPunchPacketConeRequest to JSON.
         * @function toJSON
         * @memberof peer_rpc.SendPunchPacketConeRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendPunchPacketConeRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SendPunchPacketConeRequest
         * @function getTypeUrl
         * @memberof peer_rpc.SendPunchPacketConeRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SendPunchPacketConeRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/peer_rpc.SendPunchPacketConeRequest";
        };

        return SendPunchPacketConeRequest;
    })();

    peer_rpc.SendPunchPacketHardSymRequest = (function() {

        /**
         * Properties of a SendPunchPacketHardSymRequest.
         * @memberof peer_rpc
         * @interface ISendPunchPacketHardSymRequest
         * @property {common.ISocketAddr|null} [listenerMappedAddr] SendPunchPacketHardSymRequest listenerMappedAddr
         * @property {Array.<common.IIpv4Addr>|null} [publicIps] SendPunchPacketHardSymRequest publicIps
         * @property {number|null} [transactionId] SendPunchPacketHardSymRequest transactionId
         * @property {number|null} [portIndex] SendPunchPacketHardSymRequest portIndex
         * @property {number|null} [round] SendPunchPacketHardSymRequest round
         */

        /**
         * Constructs a new SendPunchPacketHardSymRequest.
         * @memberof peer_rpc
         * @classdesc Represents a SendPunchPacketHardSymRequest.
         * @implements ISendPunchPacketHardSymRequest
         * @constructor
         * @param {peer_rpc.ISendPunchPacketHardSymRequest=} [properties] Properties to set
         */
        function SendPunchPacketHardSymRequest(properties) {
            this.publicIps = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendPunchPacketHardSymRequest listenerMappedAddr.
         * @member {common.ISocketAddr|null|undefined} listenerMappedAddr
         * @memberof peer_rpc.SendPunchPacketHardSymRequest
         * @instance
         */
        SendPunchPacketHardSymRequest.prototype.listenerMappedAddr = null;

        /**
         * SendPunchPacketHardSymRequest publicIps.
         * @member {Array.<common.IIpv4Addr>} publicIps
         * @memberof peer_rpc.SendPunchPacketHardSymRequest
         * @instance
         */
        SendPunchPacketHardSymRequest.prototype.publicIps = $util.emptyArray;

        /**
         * SendPunchPacketHardSymRequest transactionId.
         * @member {number} transactionId
         * @memberof peer_rpc.SendPunchPacketHardSymRequest
         * @instance
         */
        SendPunchPacketHardSymRequest.prototype.transactionId = 0;

        /**
         * SendPunchPacketHardSymRequest portIndex.
         * @member {number} portIndex
         * @memberof peer_rpc.SendPunchPacketHardSymRequest
         * @instance
         */
        SendPunchPacketHardSymRequest.prototype.portIndex = 0;

        /**
         * SendPunchPacketHardSymRequest round.
         * @member {number} round
         * @memberof peer_rpc.SendPunchPacketHardSymRequest
         * @instance
         */
        SendPunchPacketHardSymRequest.prototype.round = 0;

        /**
         * Creates a new SendPunchPacketHardSymRequest instance using the specified properties.
         * @function create
         * @memberof peer_rpc.SendPunchPacketHardSymRequest
         * @static
         * @param {peer_rpc.ISendPunchPacketHardSymRequest=} [properties] Properties to set
         * @returns {peer_rpc.SendPunchPacketHardSymRequest} SendPunchPacketHardSymRequest instance
         */
        SendPunchPacketHardSymRequest.create = function create(properties) {
            return new SendPunchPacketHardSymRequest(properties);
        };

        /**
         * Encodes the specified SendPunchPacketHardSymRequest message. Does not implicitly {@link peer_rpc.SendPunchPacketHardSymRequest.verify|verify} messages.
         * @function encode
         * @memberof peer_rpc.SendPunchPacketHardSymRequest
         * @static
         * @param {peer_rpc.ISendPunchPacketHardSymRequest} message SendPunchPacketHardSymRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendPunchPacketHardSymRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.listenerMappedAddr != null && Object.hasOwnProperty.call(message, "listenerMappedAddr"))
                $root.common.SocketAddr.encode(message.listenerMappedAddr, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.publicIps != null && message.publicIps.length)
                for (let i = 0; i < message.publicIps.length; ++i)
                    $root.common.Ipv4Addr.encode(message.publicIps[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.transactionId != null && Object.hasOwnProperty.call(message, "transactionId"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.transactionId);
            if (message.portIndex != null && Object.hasOwnProperty.call(message, "portIndex"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.portIndex);
            if (message.round != null && Object.hasOwnProperty.call(message, "round"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.round);
            return writer;
        };

        /**
         * Encodes the specified SendPunchPacketHardSymRequest message, length delimited. Does not implicitly {@link peer_rpc.SendPunchPacketHardSymRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof peer_rpc.SendPunchPacketHardSymRequest
         * @static
         * @param {peer_rpc.ISendPunchPacketHardSymRequest} message SendPunchPacketHardSymRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendPunchPacketHardSymRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendPunchPacketHardSymRequest message from the specified reader or buffer.
         * @function decode
         * @memberof peer_rpc.SendPunchPacketHardSymRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {peer_rpc.SendPunchPacketHardSymRequest} SendPunchPacketHardSymRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendPunchPacketHardSymRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.peer_rpc.SendPunchPacketHardSymRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.listenerMappedAddr = $root.common.SocketAddr.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        if (!(message.publicIps && message.publicIps.length))
                            message.publicIps = [];
                        message.publicIps.push($root.common.Ipv4Addr.decode(reader, reader.uint32()));
                        break;
                    }
                case 3: {
                        message.transactionId = reader.uint32();
                        break;
                    }
                case 4: {
                        message.portIndex = reader.uint32();
                        break;
                    }
                case 5: {
                        message.round = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendPunchPacketHardSymRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof peer_rpc.SendPunchPacketHardSymRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {peer_rpc.SendPunchPacketHardSymRequest} SendPunchPacketHardSymRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendPunchPacketHardSymRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendPunchPacketHardSymRequest message.
         * @function verify
         * @memberof peer_rpc.SendPunchPacketHardSymRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendPunchPacketHardSymRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.listenerMappedAddr != null && message.hasOwnProperty("listenerMappedAddr")) {
                let error = $root.common.SocketAddr.verify(message.listenerMappedAddr);
                if (error)
                    return "listenerMappedAddr." + error;
            }
            if (message.publicIps != null && message.hasOwnProperty("publicIps")) {
                if (!Array.isArray(message.publicIps))
                    return "publicIps: array expected";
                for (let i = 0; i < message.publicIps.length; ++i) {
                    let error = $root.common.Ipv4Addr.verify(message.publicIps[i]);
                    if (error)
                        return "publicIps." + error;
                }
            }
            if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                if (!$util.isInteger(message.transactionId))
                    return "transactionId: integer expected";
            if (message.portIndex != null && message.hasOwnProperty("portIndex"))
                if (!$util.isInteger(message.portIndex))
                    return "portIndex: integer expected";
            if (message.round != null && message.hasOwnProperty("round"))
                if (!$util.isInteger(message.round))
                    return "round: integer expected";
            return null;
        };

        /**
         * Creates a SendPunchPacketHardSymRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof peer_rpc.SendPunchPacketHardSymRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {peer_rpc.SendPunchPacketHardSymRequest} SendPunchPacketHardSymRequest
         */
        SendPunchPacketHardSymRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.peer_rpc.SendPunchPacketHardSymRequest)
                return object;
            let message = new $root.peer_rpc.SendPunchPacketHardSymRequest();
            if (object.listenerMappedAddr != null) {
                if (typeof object.listenerMappedAddr !== "object")
                    throw TypeError(".peer_rpc.SendPunchPacketHardSymRequest.listenerMappedAddr: object expected");
                message.listenerMappedAddr = $root.common.SocketAddr.fromObject(object.listenerMappedAddr);
            }
            if (object.publicIps) {
                if (!Array.isArray(object.publicIps))
                    throw TypeError(".peer_rpc.SendPunchPacketHardSymRequest.publicIps: array expected");
                message.publicIps = [];
                for (let i = 0; i < object.publicIps.length; ++i) {
                    if (typeof object.publicIps[i] !== "object")
                        throw TypeError(".peer_rpc.SendPunchPacketHardSymRequest.publicIps: object expected");
                    message.publicIps[i] = $root.common.Ipv4Addr.fromObject(object.publicIps[i]);
                }
            }
            if (object.transactionId != null)
                message.transactionId = object.transactionId >>> 0;
            if (object.portIndex != null)
                message.portIndex = object.portIndex >>> 0;
            if (object.round != null)
                message.round = object.round >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a SendPunchPacketHardSymRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof peer_rpc.SendPunchPacketHardSymRequest
         * @static
         * @param {peer_rpc.SendPunchPacketHardSymRequest} message SendPunchPacketHardSymRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendPunchPacketHardSymRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.publicIps = [];
            if (options.defaults) {
                object.listenerMappedAddr = null;
                object.transactionId = 0;
                object.portIndex = 0;
                object.round = 0;
            }
            if (message.listenerMappedAddr != null && message.hasOwnProperty("listenerMappedAddr"))
                object.listenerMappedAddr = $root.common.SocketAddr.toObject(message.listenerMappedAddr, options);
            if (message.publicIps && message.publicIps.length) {
                object.publicIps = [];
                for (let j = 0; j < message.publicIps.length; ++j)
                    object.publicIps[j] = $root.common.Ipv4Addr.toObject(message.publicIps[j], options);
            }
            if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                object.transactionId = message.transactionId;
            if (message.portIndex != null && message.hasOwnProperty("portIndex"))
                object.portIndex = message.portIndex;
            if (message.round != null && message.hasOwnProperty("round"))
                object.round = message.round;
            return object;
        };

        /**
         * Converts this SendPunchPacketHardSymRequest to JSON.
         * @function toJSON
         * @memberof peer_rpc.SendPunchPacketHardSymRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendPunchPacketHardSymRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SendPunchPacketHardSymRequest
         * @function getTypeUrl
         * @memberof peer_rpc.SendPunchPacketHardSymRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SendPunchPacketHardSymRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/peer_rpc.SendPunchPacketHardSymRequest";
        };

        return SendPunchPacketHardSymRequest;
    })();

    peer_rpc.SendPunchPacketHardSymResponse = (function() {

        /**
         * Properties of a SendPunchPacketHardSymResponse.
         * @memberof peer_rpc
         * @interface ISendPunchPacketHardSymResponse
         * @property {number|null} [nextPortIndex] SendPunchPacketHardSymResponse nextPortIndex
         */

        /**
         * Constructs a new SendPunchPacketHardSymResponse.
         * @memberof peer_rpc
         * @classdesc Represents a SendPunchPacketHardSymResponse.
         * @implements ISendPunchPacketHardSymResponse
         * @constructor
         * @param {peer_rpc.ISendPunchPacketHardSymResponse=} [properties] Properties to set
         */
        function SendPunchPacketHardSymResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendPunchPacketHardSymResponse nextPortIndex.
         * @member {number} nextPortIndex
         * @memberof peer_rpc.SendPunchPacketHardSymResponse
         * @instance
         */
        SendPunchPacketHardSymResponse.prototype.nextPortIndex = 0;

        /**
         * Creates a new SendPunchPacketHardSymResponse instance using the specified properties.
         * @function create
         * @memberof peer_rpc.SendPunchPacketHardSymResponse
         * @static
         * @param {peer_rpc.ISendPunchPacketHardSymResponse=} [properties] Properties to set
         * @returns {peer_rpc.SendPunchPacketHardSymResponse} SendPunchPacketHardSymResponse instance
         */
        SendPunchPacketHardSymResponse.create = function create(properties) {
            return new SendPunchPacketHardSymResponse(properties);
        };

        /**
         * Encodes the specified SendPunchPacketHardSymResponse message. Does not implicitly {@link peer_rpc.SendPunchPacketHardSymResponse.verify|verify} messages.
         * @function encode
         * @memberof peer_rpc.SendPunchPacketHardSymResponse
         * @static
         * @param {peer_rpc.ISendPunchPacketHardSymResponse} message SendPunchPacketHardSymResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendPunchPacketHardSymResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.nextPortIndex != null && Object.hasOwnProperty.call(message, "nextPortIndex"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.nextPortIndex);
            return writer;
        };

        /**
         * Encodes the specified SendPunchPacketHardSymResponse message, length delimited. Does not implicitly {@link peer_rpc.SendPunchPacketHardSymResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof peer_rpc.SendPunchPacketHardSymResponse
         * @static
         * @param {peer_rpc.ISendPunchPacketHardSymResponse} message SendPunchPacketHardSymResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendPunchPacketHardSymResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendPunchPacketHardSymResponse message from the specified reader or buffer.
         * @function decode
         * @memberof peer_rpc.SendPunchPacketHardSymResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {peer_rpc.SendPunchPacketHardSymResponse} SendPunchPacketHardSymResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendPunchPacketHardSymResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.peer_rpc.SendPunchPacketHardSymResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.nextPortIndex = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendPunchPacketHardSymResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof peer_rpc.SendPunchPacketHardSymResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {peer_rpc.SendPunchPacketHardSymResponse} SendPunchPacketHardSymResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendPunchPacketHardSymResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendPunchPacketHardSymResponse message.
         * @function verify
         * @memberof peer_rpc.SendPunchPacketHardSymResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendPunchPacketHardSymResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.nextPortIndex != null && message.hasOwnProperty("nextPortIndex"))
                if (!$util.isInteger(message.nextPortIndex))
                    return "nextPortIndex: integer expected";
            return null;
        };

        /**
         * Creates a SendPunchPacketHardSymResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof peer_rpc.SendPunchPacketHardSymResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {peer_rpc.SendPunchPacketHardSymResponse} SendPunchPacketHardSymResponse
         */
        SendPunchPacketHardSymResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.peer_rpc.SendPunchPacketHardSymResponse)
                return object;
            let message = new $root.peer_rpc.SendPunchPacketHardSymResponse();
            if (object.nextPortIndex != null)
                message.nextPortIndex = object.nextPortIndex >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a SendPunchPacketHardSymResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof peer_rpc.SendPunchPacketHardSymResponse
         * @static
         * @param {peer_rpc.SendPunchPacketHardSymResponse} message SendPunchPacketHardSymResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendPunchPacketHardSymResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.nextPortIndex = 0;
            if (message.nextPortIndex != null && message.hasOwnProperty("nextPortIndex"))
                object.nextPortIndex = message.nextPortIndex;
            return object;
        };

        /**
         * Converts this SendPunchPacketHardSymResponse to JSON.
         * @function toJSON
         * @memberof peer_rpc.SendPunchPacketHardSymResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendPunchPacketHardSymResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SendPunchPacketHardSymResponse
         * @function getTypeUrl
         * @memberof peer_rpc.SendPunchPacketHardSymResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SendPunchPacketHardSymResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/peer_rpc.SendPunchPacketHardSymResponse";
        };

        return SendPunchPacketHardSymResponse;
    })();

    peer_rpc.SendPunchPacketEasySymRequest = (function() {

        /**
         * Properties of a SendPunchPacketEasySymRequest.
         * @memberof peer_rpc
         * @interface ISendPunchPacketEasySymRequest
         * @property {common.ISocketAddr|null} [listenerMappedAddr] SendPunchPacketEasySymRequest listenerMappedAddr
         * @property {Array.<common.IIpv4Addr>|null} [publicIps] SendPunchPacketEasySymRequest publicIps
         * @property {number|null} [transactionId] SendPunchPacketEasySymRequest transactionId
         * @property {number|null} [basePortNum] SendPunchPacketEasySymRequest basePortNum
         * @property {number|null} [maxPortNum] SendPunchPacketEasySymRequest maxPortNum
         * @property {boolean|null} [isIncremental] SendPunchPacketEasySymRequest isIncremental
         */

        /**
         * Constructs a new SendPunchPacketEasySymRequest.
         * @memberof peer_rpc
         * @classdesc Represents a SendPunchPacketEasySymRequest.
         * @implements ISendPunchPacketEasySymRequest
         * @constructor
         * @param {peer_rpc.ISendPunchPacketEasySymRequest=} [properties] Properties to set
         */
        function SendPunchPacketEasySymRequest(properties) {
            this.publicIps = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendPunchPacketEasySymRequest listenerMappedAddr.
         * @member {common.ISocketAddr|null|undefined} listenerMappedAddr
         * @memberof peer_rpc.SendPunchPacketEasySymRequest
         * @instance
         */
        SendPunchPacketEasySymRequest.prototype.listenerMappedAddr = null;

        /**
         * SendPunchPacketEasySymRequest publicIps.
         * @member {Array.<common.IIpv4Addr>} publicIps
         * @memberof peer_rpc.SendPunchPacketEasySymRequest
         * @instance
         */
        SendPunchPacketEasySymRequest.prototype.publicIps = $util.emptyArray;

        /**
         * SendPunchPacketEasySymRequest transactionId.
         * @member {number} transactionId
         * @memberof peer_rpc.SendPunchPacketEasySymRequest
         * @instance
         */
        SendPunchPacketEasySymRequest.prototype.transactionId = 0;

        /**
         * SendPunchPacketEasySymRequest basePortNum.
         * @member {number} basePortNum
         * @memberof peer_rpc.SendPunchPacketEasySymRequest
         * @instance
         */
        SendPunchPacketEasySymRequest.prototype.basePortNum = 0;

        /**
         * SendPunchPacketEasySymRequest maxPortNum.
         * @member {number} maxPortNum
         * @memberof peer_rpc.SendPunchPacketEasySymRequest
         * @instance
         */
        SendPunchPacketEasySymRequest.prototype.maxPortNum = 0;

        /**
         * SendPunchPacketEasySymRequest isIncremental.
         * @member {boolean} isIncremental
         * @memberof peer_rpc.SendPunchPacketEasySymRequest
         * @instance
         */
        SendPunchPacketEasySymRequest.prototype.isIncremental = false;

        /**
         * Creates a new SendPunchPacketEasySymRequest instance using the specified properties.
         * @function create
         * @memberof peer_rpc.SendPunchPacketEasySymRequest
         * @static
         * @param {peer_rpc.ISendPunchPacketEasySymRequest=} [properties] Properties to set
         * @returns {peer_rpc.SendPunchPacketEasySymRequest} SendPunchPacketEasySymRequest instance
         */
        SendPunchPacketEasySymRequest.create = function create(properties) {
            return new SendPunchPacketEasySymRequest(properties);
        };

        /**
         * Encodes the specified SendPunchPacketEasySymRequest message. Does not implicitly {@link peer_rpc.SendPunchPacketEasySymRequest.verify|verify} messages.
         * @function encode
         * @memberof peer_rpc.SendPunchPacketEasySymRequest
         * @static
         * @param {peer_rpc.ISendPunchPacketEasySymRequest} message SendPunchPacketEasySymRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendPunchPacketEasySymRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.listenerMappedAddr != null && Object.hasOwnProperty.call(message, "listenerMappedAddr"))
                $root.common.SocketAddr.encode(message.listenerMappedAddr, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.publicIps != null && message.publicIps.length)
                for (let i = 0; i < message.publicIps.length; ++i)
                    $root.common.Ipv4Addr.encode(message.publicIps[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.transactionId != null && Object.hasOwnProperty.call(message, "transactionId"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.transactionId);
            if (message.basePortNum != null && Object.hasOwnProperty.call(message, "basePortNum"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.basePortNum);
            if (message.maxPortNum != null && Object.hasOwnProperty.call(message, "maxPortNum"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.maxPortNum);
            if (message.isIncremental != null && Object.hasOwnProperty.call(message, "isIncremental"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.isIncremental);
            return writer;
        };

        /**
         * Encodes the specified SendPunchPacketEasySymRequest message, length delimited. Does not implicitly {@link peer_rpc.SendPunchPacketEasySymRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof peer_rpc.SendPunchPacketEasySymRequest
         * @static
         * @param {peer_rpc.ISendPunchPacketEasySymRequest} message SendPunchPacketEasySymRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendPunchPacketEasySymRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendPunchPacketEasySymRequest message from the specified reader or buffer.
         * @function decode
         * @memberof peer_rpc.SendPunchPacketEasySymRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {peer_rpc.SendPunchPacketEasySymRequest} SendPunchPacketEasySymRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendPunchPacketEasySymRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.peer_rpc.SendPunchPacketEasySymRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.listenerMappedAddr = $root.common.SocketAddr.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        if (!(message.publicIps && message.publicIps.length))
                            message.publicIps = [];
                        message.publicIps.push($root.common.Ipv4Addr.decode(reader, reader.uint32()));
                        break;
                    }
                case 3: {
                        message.transactionId = reader.uint32();
                        break;
                    }
                case 4: {
                        message.basePortNum = reader.uint32();
                        break;
                    }
                case 5: {
                        message.maxPortNum = reader.uint32();
                        break;
                    }
                case 6: {
                        message.isIncremental = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendPunchPacketEasySymRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof peer_rpc.SendPunchPacketEasySymRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {peer_rpc.SendPunchPacketEasySymRequest} SendPunchPacketEasySymRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendPunchPacketEasySymRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendPunchPacketEasySymRequest message.
         * @function verify
         * @memberof peer_rpc.SendPunchPacketEasySymRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendPunchPacketEasySymRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.listenerMappedAddr != null && message.hasOwnProperty("listenerMappedAddr")) {
                let error = $root.common.SocketAddr.verify(message.listenerMappedAddr);
                if (error)
                    return "listenerMappedAddr." + error;
            }
            if (message.publicIps != null && message.hasOwnProperty("publicIps")) {
                if (!Array.isArray(message.publicIps))
                    return "publicIps: array expected";
                for (let i = 0; i < message.publicIps.length; ++i) {
                    let error = $root.common.Ipv4Addr.verify(message.publicIps[i]);
                    if (error)
                        return "publicIps." + error;
                }
            }
            if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                if (!$util.isInteger(message.transactionId))
                    return "transactionId: integer expected";
            if (message.basePortNum != null && message.hasOwnProperty("basePortNum"))
                if (!$util.isInteger(message.basePortNum))
                    return "basePortNum: integer expected";
            if (message.maxPortNum != null && message.hasOwnProperty("maxPortNum"))
                if (!$util.isInteger(message.maxPortNum))
                    return "maxPortNum: integer expected";
            if (message.isIncremental != null && message.hasOwnProperty("isIncremental"))
                if (typeof message.isIncremental !== "boolean")
                    return "isIncremental: boolean expected";
            return null;
        };

        /**
         * Creates a SendPunchPacketEasySymRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof peer_rpc.SendPunchPacketEasySymRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {peer_rpc.SendPunchPacketEasySymRequest} SendPunchPacketEasySymRequest
         */
        SendPunchPacketEasySymRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.peer_rpc.SendPunchPacketEasySymRequest)
                return object;
            let message = new $root.peer_rpc.SendPunchPacketEasySymRequest();
            if (object.listenerMappedAddr != null) {
                if (typeof object.listenerMappedAddr !== "object")
                    throw TypeError(".peer_rpc.SendPunchPacketEasySymRequest.listenerMappedAddr: object expected");
                message.listenerMappedAddr = $root.common.SocketAddr.fromObject(object.listenerMappedAddr);
            }
            if (object.publicIps) {
                if (!Array.isArray(object.publicIps))
                    throw TypeError(".peer_rpc.SendPunchPacketEasySymRequest.publicIps: array expected");
                message.publicIps = [];
                for (let i = 0; i < object.publicIps.length; ++i) {
                    if (typeof object.publicIps[i] !== "object")
                        throw TypeError(".peer_rpc.SendPunchPacketEasySymRequest.publicIps: object expected");
                    message.publicIps[i] = $root.common.Ipv4Addr.fromObject(object.publicIps[i]);
                }
            }
            if (object.transactionId != null)
                message.transactionId = object.transactionId >>> 0;
            if (object.basePortNum != null)
                message.basePortNum = object.basePortNum >>> 0;
            if (object.maxPortNum != null)
                message.maxPortNum = object.maxPortNum >>> 0;
            if (object.isIncremental != null)
                message.isIncremental = Boolean(object.isIncremental);
            return message;
        };

        /**
         * Creates a plain object from a SendPunchPacketEasySymRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof peer_rpc.SendPunchPacketEasySymRequest
         * @static
         * @param {peer_rpc.SendPunchPacketEasySymRequest} message SendPunchPacketEasySymRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendPunchPacketEasySymRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.publicIps = [];
            if (options.defaults) {
                object.listenerMappedAddr = null;
                object.transactionId = 0;
                object.basePortNum = 0;
                object.maxPortNum = 0;
                object.isIncremental = false;
            }
            if (message.listenerMappedAddr != null && message.hasOwnProperty("listenerMappedAddr"))
                object.listenerMappedAddr = $root.common.SocketAddr.toObject(message.listenerMappedAddr, options);
            if (message.publicIps && message.publicIps.length) {
                object.publicIps = [];
                for (let j = 0; j < message.publicIps.length; ++j)
                    object.publicIps[j] = $root.common.Ipv4Addr.toObject(message.publicIps[j], options);
            }
            if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                object.transactionId = message.transactionId;
            if (message.basePortNum != null && message.hasOwnProperty("basePortNum"))
                object.basePortNum = message.basePortNum;
            if (message.maxPortNum != null && message.hasOwnProperty("maxPortNum"))
                object.maxPortNum = message.maxPortNum;
            if (message.isIncremental != null && message.hasOwnProperty("isIncremental"))
                object.isIncremental = message.isIncremental;
            return object;
        };

        /**
         * Converts this SendPunchPacketEasySymRequest to JSON.
         * @function toJSON
         * @memberof peer_rpc.SendPunchPacketEasySymRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendPunchPacketEasySymRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SendPunchPacketEasySymRequest
         * @function getTypeUrl
         * @memberof peer_rpc.SendPunchPacketEasySymRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SendPunchPacketEasySymRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/peer_rpc.SendPunchPacketEasySymRequest";
        };

        return SendPunchPacketEasySymRequest;
    })();

    peer_rpc.SendPunchPacketBothEasySymRequest = (function() {

        /**
         * Properties of a SendPunchPacketBothEasySymRequest.
         * @memberof peer_rpc
         * @interface ISendPunchPacketBothEasySymRequest
         * @property {number|null} [udpSocketCount] SendPunchPacketBothEasySymRequest udpSocketCount
         * @property {common.IIpv4Addr|null} [publicIp] SendPunchPacketBothEasySymRequest publicIp
         * @property {number|null} [transactionId] SendPunchPacketBothEasySymRequest transactionId
         * @property {number|null} [dstPortNum] SendPunchPacketBothEasySymRequest dstPortNum
         * @property {number|null} [waitTimeMs] SendPunchPacketBothEasySymRequest waitTimeMs
         */

        /**
         * Constructs a new SendPunchPacketBothEasySymRequest.
         * @memberof peer_rpc
         * @classdesc Represents a SendPunchPacketBothEasySymRequest.
         * @implements ISendPunchPacketBothEasySymRequest
         * @constructor
         * @param {peer_rpc.ISendPunchPacketBothEasySymRequest=} [properties] Properties to set
         */
        function SendPunchPacketBothEasySymRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendPunchPacketBothEasySymRequest udpSocketCount.
         * @member {number} udpSocketCount
         * @memberof peer_rpc.SendPunchPacketBothEasySymRequest
         * @instance
         */
        SendPunchPacketBothEasySymRequest.prototype.udpSocketCount = 0;

        /**
         * SendPunchPacketBothEasySymRequest publicIp.
         * @member {common.IIpv4Addr|null|undefined} publicIp
         * @memberof peer_rpc.SendPunchPacketBothEasySymRequest
         * @instance
         */
        SendPunchPacketBothEasySymRequest.prototype.publicIp = null;

        /**
         * SendPunchPacketBothEasySymRequest transactionId.
         * @member {number} transactionId
         * @memberof peer_rpc.SendPunchPacketBothEasySymRequest
         * @instance
         */
        SendPunchPacketBothEasySymRequest.prototype.transactionId = 0;

        /**
         * SendPunchPacketBothEasySymRequest dstPortNum.
         * @member {number} dstPortNum
         * @memberof peer_rpc.SendPunchPacketBothEasySymRequest
         * @instance
         */
        SendPunchPacketBothEasySymRequest.prototype.dstPortNum = 0;

        /**
         * SendPunchPacketBothEasySymRequest waitTimeMs.
         * @member {number} waitTimeMs
         * @memberof peer_rpc.SendPunchPacketBothEasySymRequest
         * @instance
         */
        SendPunchPacketBothEasySymRequest.prototype.waitTimeMs = 0;

        /**
         * Creates a new SendPunchPacketBothEasySymRequest instance using the specified properties.
         * @function create
         * @memberof peer_rpc.SendPunchPacketBothEasySymRequest
         * @static
         * @param {peer_rpc.ISendPunchPacketBothEasySymRequest=} [properties] Properties to set
         * @returns {peer_rpc.SendPunchPacketBothEasySymRequest} SendPunchPacketBothEasySymRequest instance
         */
        SendPunchPacketBothEasySymRequest.create = function create(properties) {
            return new SendPunchPacketBothEasySymRequest(properties);
        };

        /**
         * Encodes the specified SendPunchPacketBothEasySymRequest message. Does not implicitly {@link peer_rpc.SendPunchPacketBothEasySymRequest.verify|verify} messages.
         * @function encode
         * @memberof peer_rpc.SendPunchPacketBothEasySymRequest
         * @static
         * @param {peer_rpc.ISendPunchPacketBothEasySymRequest} message SendPunchPacketBothEasySymRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendPunchPacketBothEasySymRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.udpSocketCount != null && Object.hasOwnProperty.call(message, "udpSocketCount"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.udpSocketCount);
            if (message.publicIp != null && Object.hasOwnProperty.call(message, "publicIp"))
                $root.common.Ipv4Addr.encode(message.publicIp, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.transactionId != null && Object.hasOwnProperty.call(message, "transactionId"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.transactionId);
            if (message.dstPortNum != null && Object.hasOwnProperty.call(message, "dstPortNum"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.dstPortNum);
            if (message.waitTimeMs != null && Object.hasOwnProperty.call(message, "waitTimeMs"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.waitTimeMs);
            return writer;
        };

        /**
         * Encodes the specified SendPunchPacketBothEasySymRequest message, length delimited. Does not implicitly {@link peer_rpc.SendPunchPacketBothEasySymRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof peer_rpc.SendPunchPacketBothEasySymRequest
         * @static
         * @param {peer_rpc.ISendPunchPacketBothEasySymRequest} message SendPunchPacketBothEasySymRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendPunchPacketBothEasySymRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendPunchPacketBothEasySymRequest message from the specified reader or buffer.
         * @function decode
         * @memberof peer_rpc.SendPunchPacketBothEasySymRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {peer_rpc.SendPunchPacketBothEasySymRequest} SendPunchPacketBothEasySymRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendPunchPacketBothEasySymRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.peer_rpc.SendPunchPacketBothEasySymRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.udpSocketCount = reader.uint32();
                        break;
                    }
                case 2: {
                        message.publicIp = $root.common.Ipv4Addr.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.transactionId = reader.uint32();
                        break;
                    }
                case 4: {
                        message.dstPortNum = reader.uint32();
                        break;
                    }
                case 5: {
                        message.waitTimeMs = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendPunchPacketBothEasySymRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof peer_rpc.SendPunchPacketBothEasySymRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {peer_rpc.SendPunchPacketBothEasySymRequest} SendPunchPacketBothEasySymRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendPunchPacketBothEasySymRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendPunchPacketBothEasySymRequest message.
         * @function verify
         * @memberof peer_rpc.SendPunchPacketBothEasySymRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendPunchPacketBothEasySymRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.udpSocketCount != null && message.hasOwnProperty("udpSocketCount"))
                if (!$util.isInteger(message.udpSocketCount))
                    return "udpSocketCount: integer expected";
            if (message.publicIp != null && message.hasOwnProperty("publicIp")) {
                let error = $root.common.Ipv4Addr.verify(message.publicIp);
                if (error)
                    return "publicIp." + error;
            }
            if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                if (!$util.isInteger(message.transactionId))
                    return "transactionId: integer expected";
            if (message.dstPortNum != null && message.hasOwnProperty("dstPortNum"))
                if (!$util.isInteger(message.dstPortNum))
                    return "dstPortNum: integer expected";
            if (message.waitTimeMs != null && message.hasOwnProperty("waitTimeMs"))
                if (!$util.isInteger(message.waitTimeMs))
                    return "waitTimeMs: integer expected";
            return null;
        };

        /**
         * Creates a SendPunchPacketBothEasySymRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof peer_rpc.SendPunchPacketBothEasySymRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {peer_rpc.SendPunchPacketBothEasySymRequest} SendPunchPacketBothEasySymRequest
         */
        SendPunchPacketBothEasySymRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.peer_rpc.SendPunchPacketBothEasySymRequest)
                return object;
            let message = new $root.peer_rpc.SendPunchPacketBothEasySymRequest();
            if (object.udpSocketCount != null)
                message.udpSocketCount = object.udpSocketCount >>> 0;
            if (object.publicIp != null) {
                if (typeof object.publicIp !== "object")
                    throw TypeError(".peer_rpc.SendPunchPacketBothEasySymRequest.publicIp: object expected");
                message.publicIp = $root.common.Ipv4Addr.fromObject(object.publicIp);
            }
            if (object.transactionId != null)
                message.transactionId = object.transactionId >>> 0;
            if (object.dstPortNum != null)
                message.dstPortNum = object.dstPortNum >>> 0;
            if (object.waitTimeMs != null)
                message.waitTimeMs = object.waitTimeMs >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a SendPunchPacketBothEasySymRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof peer_rpc.SendPunchPacketBothEasySymRequest
         * @static
         * @param {peer_rpc.SendPunchPacketBothEasySymRequest} message SendPunchPacketBothEasySymRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendPunchPacketBothEasySymRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.udpSocketCount = 0;
                object.publicIp = null;
                object.transactionId = 0;
                object.dstPortNum = 0;
                object.waitTimeMs = 0;
            }
            if (message.udpSocketCount != null && message.hasOwnProperty("udpSocketCount"))
                object.udpSocketCount = message.udpSocketCount;
            if (message.publicIp != null && message.hasOwnProperty("publicIp"))
                object.publicIp = $root.common.Ipv4Addr.toObject(message.publicIp, options);
            if (message.transactionId != null && message.hasOwnProperty("transactionId"))
                object.transactionId = message.transactionId;
            if (message.dstPortNum != null && message.hasOwnProperty("dstPortNum"))
                object.dstPortNum = message.dstPortNum;
            if (message.waitTimeMs != null && message.hasOwnProperty("waitTimeMs"))
                object.waitTimeMs = message.waitTimeMs;
            return object;
        };

        /**
         * Converts this SendPunchPacketBothEasySymRequest to JSON.
         * @function toJSON
         * @memberof peer_rpc.SendPunchPacketBothEasySymRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendPunchPacketBothEasySymRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SendPunchPacketBothEasySymRequest
         * @function getTypeUrl
         * @memberof peer_rpc.SendPunchPacketBothEasySymRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SendPunchPacketBothEasySymRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/peer_rpc.SendPunchPacketBothEasySymRequest";
        };

        return SendPunchPacketBothEasySymRequest;
    })();

    peer_rpc.SendPunchPacketBothEasySymResponse = (function() {

        /**
         * Properties of a SendPunchPacketBothEasySymResponse.
         * @memberof peer_rpc
         * @interface ISendPunchPacketBothEasySymResponse
         * @property {boolean|null} [isBusy] SendPunchPacketBothEasySymResponse isBusy
         * @property {common.ISocketAddr|null} [baseMappedAddr] SendPunchPacketBothEasySymResponse baseMappedAddr
         */

        /**
         * Constructs a new SendPunchPacketBothEasySymResponse.
         * @memberof peer_rpc
         * @classdesc Represents a SendPunchPacketBothEasySymResponse.
         * @implements ISendPunchPacketBothEasySymResponse
         * @constructor
         * @param {peer_rpc.ISendPunchPacketBothEasySymResponse=} [properties] Properties to set
         */
        function SendPunchPacketBothEasySymResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendPunchPacketBothEasySymResponse isBusy.
         * @member {boolean} isBusy
         * @memberof peer_rpc.SendPunchPacketBothEasySymResponse
         * @instance
         */
        SendPunchPacketBothEasySymResponse.prototype.isBusy = false;

        /**
         * SendPunchPacketBothEasySymResponse baseMappedAddr.
         * @member {common.ISocketAddr|null|undefined} baseMappedAddr
         * @memberof peer_rpc.SendPunchPacketBothEasySymResponse
         * @instance
         */
        SendPunchPacketBothEasySymResponse.prototype.baseMappedAddr = null;

        /**
         * Creates a new SendPunchPacketBothEasySymResponse instance using the specified properties.
         * @function create
         * @memberof peer_rpc.SendPunchPacketBothEasySymResponse
         * @static
         * @param {peer_rpc.ISendPunchPacketBothEasySymResponse=} [properties] Properties to set
         * @returns {peer_rpc.SendPunchPacketBothEasySymResponse} SendPunchPacketBothEasySymResponse instance
         */
        SendPunchPacketBothEasySymResponse.create = function create(properties) {
            return new SendPunchPacketBothEasySymResponse(properties);
        };

        /**
         * Encodes the specified SendPunchPacketBothEasySymResponse message. Does not implicitly {@link peer_rpc.SendPunchPacketBothEasySymResponse.verify|verify} messages.
         * @function encode
         * @memberof peer_rpc.SendPunchPacketBothEasySymResponse
         * @static
         * @param {peer_rpc.ISendPunchPacketBothEasySymResponse} message SendPunchPacketBothEasySymResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendPunchPacketBothEasySymResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.isBusy != null && Object.hasOwnProperty.call(message, "isBusy"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isBusy);
            if (message.baseMappedAddr != null && Object.hasOwnProperty.call(message, "baseMappedAddr"))
                $root.common.SocketAddr.encode(message.baseMappedAddr, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SendPunchPacketBothEasySymResponse message, length delimited. Does not implicitly {@link peer_rpc.SendPunchPacketBothEasySymResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof peer_rpc.SendPunchPacketBothEasySymResponse
         * @static
         * @param {peer_rpc.ISendPunchPacketBothEasySymResponse} message SendPunchPacketBothEasySymResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendPunchPacketBothEasySymResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendPunchPacketBothEasySymResponse message from the specified reader or buffer.
         * @function decode
         * @memberof peer_rpc.SendPunchPacketBothEasySymResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {peer_rpc.SendPunchPacketBothEasySymResponse} SendPunchPacketBothEasySymResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendPunchPacketBothEasySymResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.peer_rpc.SendPunchPacketBothEasySymResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.isBusy = reader.bool();
                        break;
                    }
                case 2: {
                        message.baseMappedAddr = $root.common.SocketAddr.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendPunchPacketBothEasySymResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof peer_rpc.SendPunchPacketBothEasySymResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {peer_rpc.SendPunchPacketBothEasySymResponse} SendPunchPacketBothEasySymResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendPunchPacketBothEasySymResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendPunchPacketBothEasySymResponse message.
         * @function verify
         * @memberof peer_rpc.SendPunchPacketBothEasySymResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendPunchPacketBothEasySymResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.isBusy != null && message.hasOwnProperty("isBusy"))
                if (typeof message.isBusy !== "boolean")
                    return "isBusy: boolean expected";
            if (message.baseMappedAddr != null && message.hasOwnProperty("baseMappedAddr")) {
                let error = $root.common.SocketAddr.verify(message.baseMappedAddr);
                if (error)
                    return "baseMappedAddr." + error;
            }
            return null;
        };

        /**
         * Creates a SendPunchPacketBothEasySymResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof peer_rpc.SendPunchPacketBothEasySymResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {peer_rpc.SendPunchPacketBothEasySymResponse} SendPunchPacketBothEasySymResponse
         */
        SendPunchPacketBothEasySymResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.peer_rpc.SendPunchPacketBothEasySymResponse)
                return object;
            let message = new $root.peer_rpc.SendPunchPacketBothEasySymResponse();
            if (object.isBusy != null)
                message.isBusy = Boolean(object.isBusy);
            if (object.baseMappedAddr != null) {
                if (typeof object.baseMappedAddr !== "object")
                    throw TypeError(".peer_rpc.SendPunchPacketBothEasySymResponse.baseMappedAddr: object expected");
                message.baseMappedAddr = $root.common.SocketAddr.fromObject(object.baseMappedAddr);
            }
            return message;
        };

        /**
         * Creates a plain object from a SendPunchPacketBothEasySymResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof peer_rpc.SendPunchPacketBothEasySymResponse
         * @static
         * @param {peer_rpc.SendPunchPacketBothEasySymResponse} message SendPunchPacketBothEasySymResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendPunchPacketBothEasySymResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.isBusy = false;
                object.baseMappedAddr = null;
            }
            if (message.isBusy != null && message.hasOwnProperty("isBusy"))
                object.isBusy = message.isBusy;
            if (message.baseMappedAddr != null && message.hasOwnProperty("baseMappedAddr"))
                object.baseMappedAddr = $root.common.SocketAddr.toObject(message.baseMappedAddr, options);
            return object;
        };

        /**
         * Converts this SendPunchPacketBothEasySymResponse to JSON.
         * @function toJSON
         * @memberof peer_rpc.SendPunchPacketBothEasySymResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendPunchPacketBothEasySymResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SendPunchPacketBothEasySymResponse
         * @function getTypeUrl
         * @memberof peer_rpc.SendPunchPacketBothEasySymResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SendPunchPacketBothEasySymResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/peer_rpc.SendPunchPacketBothEasySymResponse";
        };

        return SendPunchPacketBothEasySymResponse;
    })();

    peer_rpc.UdpHolePunchRpc = (function() {

        /**
         * Constructs a new UdpHolePunchRpc service.
         * @memberof peer_rpc
         * @classdesc Represents an UdpHolePunchRpc
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function UdpHolePunchRpc(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (UdpHolePunchRpc.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = UdpHolePunchRpc;

        /**
         * Creates new UdpHolePunchRpc service using the specified rpc implementation.
         * @function create
         * @memberof peer_rpc.UdpHolePunchRpc
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {UdpHolePunchRpc} RPC service. Useful where requests and/or responses are streamed.
         */
        UdpHolePunchRpc.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link peer_rpc.UdpHolePunchRpc#selectPunchListener}.
         * @memberof peer_rpc.UdpHolePunchRpc
         * @typedef SelectPunchListenerCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {peer_rpc.SelectPunchListenerResponse} [response] SelectPunchListenerResponse
         */

        /**
         * Calls SelectPunchListener.
         * @function selectPunchListener
         * @memberof peer_rpc.UdpHolePunchRpc
         * @instance
         * @param {peer_rpc.ISelectPunchListenerRequest} request SelectPunchListenerRequest message or plain object
         * @param {peer_rpc.UdpHolePunchRpc.SelectPunchListenerCallback} callback Node-style callback called with the error, if any, and SelectPunchListenerResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UdpHolePunchRpc.prototype.selectPunchListener = function selectPunchListener(request, callback) {
            return this.rpcCall(selectPunchListener, $root.peer_rpc.SelectPunchListenerRequest, $root.peer_rpc.SelectPunchListenerResponse, request, callback);
        }, "name", { value: "SelectPunchListener" });

        /**
         * Calls SelectPunchListener.
         * @function selectPunchListener
         * @memberof peer_rpc.UdpHolePunchRpc
         * @instance
         * @param {peer_rpc.ISelectPunchListenerRequest} request SelectPunchListenerRequest message or plain object
         * @returns {Promise<peer_rpc.SelectPunchListenerResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link peer_rpc.UdpHolePunchRpc#sendPunchPacketCone}.
         * @memberof peer_rpc.UdpHolePunchRpc
         * @typedef SendPunchPacketConeCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {common.Void} [response] Void
         */

        /**
         * Calls SendPunchPacketCone.
         * @function sendPunchPacketCone
         * @memberof peer_rpc.UdpHolePunchRpc
         * @instance
         * @param {peer_rpc.ISendPunchPacketConeRequest} request SendPunchPacketConeRequest message or plain object
         * @param {peer_rpc.UdpHolePunchRpc.SendPunchPacketConeCallback} callback Node-style callback called with the error, if any, and Void
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UdpHolePunchRpc.prototype.sendPunchPacketCone = function sendPunchPacketCone(request, callback) {
            return this.rpcCall(sendPunchPacketCone, $root.peer_rpc.SendPunchPacketConeRequest, $root.common.Void, request, callback);
        }, "name", { value: "SendPunchPacketCone" });

        /**
         * Calls SendPunchPacketCone.
         * @function sendPunchPacketCone
         * @memberof peer_rpc.UdpHolePunchRpc
         * @instance
         * @param {peer_rpc.ISendPunchPacketConeRequest} request SendPunchPacketConeRequest message or plain object
         * @returns {Promise<common.Void>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link peer_rpc.UdpHolePunchRpc#sendPunchPacketHardSym}.
         * @memberof peer_rpc.UdpHolePunchRpc
         * @typedef SendPunchPacketHardSymCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {peer_rpc.SendPunchPacketHardSymResponse} [response] SendPunchPacketHardSymResponse
         */

        /**
         * Calls SendPunchPacketHardSym.
         * @function sendPunchPacketHardSym
         * @memberof peer_rpc.UdpHolePunchRpc
         * @instance
         * @param {peer_rpc.ISendPunchPacketHardSymRequest} request SendPunchPacketHardSymRequest message or plain object
         * @param {peer_rpc.UdpHolePunchRpc.SendPunchPacketHardSymCallback} callback Node-style callback called with the error, if any, and SendPunchPacketHardSymResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UdpHolePunchRpc.prototype.sendPunchPacketHardSym = function sendPunchPacketHardSym(request, callback) {
            return this.rpcCall(sendPunchPacketHardSym, $root.peer_rpc.SendPunchPacketHardSymRequest, $root.peer_rpc.SendPunchPacketHardSymResponse, request, callback);
        }, "name", { value: "SendPunchPacketHardSym" });

        /**
         * Calls SendPunchPacketHardSym.
         * @function sendPunchPacketHardSym
         * @memberof peer_rpc.UdpHolePunchRpc
         * @instance
         * @param {peer_rpc.ISendPunchPacketHardSymRequest} request SendPunchPacketHardSymRequest message or plain object
         * @returns {Promise<peer_rpc.SendPunchPacketHardSymResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link peer_rpc.UdpHolePunchRpc#sendPunchPacketEasySym}.
         * @memberof peer_rpc.UdpHolePunchRpc
         * @typedef SendPunchPacketEasySymCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {common.Void} [response] Void
         */

        /**
         * Calls SendPunchPacketEasySym.
         * @function sendPunchPacketEasySym
         * @memberof peer_rpc.UdpHolePunchRpc
         * @instance
         * @param {peer_rpc.ISendPunchPacketEasySymRequest} request SendPunchPacketEasySymRequest message or plain object
         * @param {peer_rpc.UdpHolePunchRpc.SendPunchPacketEasySymCallback} callback Node-style callback called with the error, if any, and Void
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UdpHolePunchRpc.prototype.sendPunchPacketEasySym = function sendPunchPacketEasySym(request, callback) {
            return this.rpcCall(sendPunchPacketEasySym, $root.peer_rpc.SendPunchPacketEasySymRequest, $root.common.Void, request, callback);
        }, "name", { value: "SendPunchPacketEasySym" });

        /**
         * Calls SendPunchPacketEasySym.
         * @function sendPunchPacketEasySym
         * @memberof peer_rpc.UdpHolePunchRpc
         * @instance
         * @param {peer_rpc.ISendPunchPacketEasySymRequest} request SendPunchPacketEasySymRequest message or plain object
         * @returns {Promise<common.Void>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link peer_rpc.UdpHolePunchRpc#sendPunchPacketBothEasySym}.
         * @memberof peer_rpc.UdpHolePunchRpc
         * @typedef SendPunchPacketBothEasySymCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {peer_rpc.SendPunchPacketBothEasySymResponse} [response] SendPunchPacketBothEasySymResponse
         */

        /**
         * Calls SendPunchPacketBothEasySym.
         * @function sendPunchPacketBothEasySym
         * @memberof peer_rpc.UdpHolePunchRpc
         * @instance
         * @param {peer_rpc.ISendPunchPacketBothEasySymRequest} request SendPunchPacketBothEasySymRequest message or plain object
         * @param {peer_rpc.UdpHolePunchRpc.SendPunchPacketBothEasySymCallback} callback Node-style callback called with the error, if any, and SendPunchPacketBothEasySymResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UdpHolePunchRpc.prototype.sendPunchPacketBothEasySym = function sendPunchPacketBothEasySym(request, callback) {
            return this.rpcCall(sendPunchPacketBothEasySym, $root.peer_rpc.SendPunchPacketBothEasySymRequest, $root.peer_rpc.SendPunchPacketBothEasySymResponse, request, callback);
        }, "name", { value: "SendPunchPacketBothEasySym" });

        /**
         * Calls SendPunchPacketBothEasySym.
         * @function sendPunchPacketBothEasySym
         * @memberof peer_rpc.UdpHolePunchRpc
         * @instance
         * @param {peer_rpc.ISendPunchPacketBothEasySymRequest} request SendPunchPacketBothEasySymRequest message or plain object
         * @returns {Promise<peer_rpc.SendPunchPacketBothEasySymResponse>} Promise
         * @variation 2
         */

        return UdpHolePunchRpc;
    })();

    peer_rpc.DirectConnectedPeerInfo = (function() {

        /**
         * Properties of a DirectConnectedPeerInfo.
         * @memberof peer_rpc
         * @interface IDirectConnectedPeerInfo
         * @property {number|null} [latencyMs] DirectConnectedPeerInfo latencyMs
         */

        /**
         * Constructs a new DirectConnectedPeerInfo.
         * @memberof peer_rpc
         * @classdesc Represents a DirectConnectedPeerInfo.
         * @implements IDirectConnectedPeerInfo
         * @constructor
         * @param {peer_rpc.IDirectConnectedPeerInfo=} [properties] Properties to set
         */
        function DirectConnectedPeerInfo(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DirectConnectedPeerInfo latencyMs.
         * @member {number} latencyMs
         * @memberof peer_rpc.DirectConnectedPeerInfo
         * @instance
         */
        DirectConnectedPeerInfo.prototype.latencyMs = 0;

        /**
         * Creates a new DirectConnectedPeerInfo instance using the specified properties.
         * @function create
         * @memberof peer_rpc.DirectConnectedPeerInfo
         * @static
         * @param {peer_rpc.IDirectConnectedPeerInfo=} [properties] Properties to set
         * @returns {peer_rpc.DirectConnectedPeerInfo} DirectConnectedPeerInfo instance
         */
        DirectConnectedPeerInfo.create = function create(properties) {
            return new DirectConnectedPeerInfo(properties);
        };

        /**
         * Encodes the specified DirectConnectedPeerInfo message. Does not implicitly {@link peer_rpc.DirectConnectedPeerInfo.verify|verify} messages.
         * @function encode
         * @memberof peer_rpc.DirectConnectedPeerInfo
         * @static
         * @param {peer_rpc.IDirectConnectedPeerInfo} message DirectConnectedPeerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DirectConnectedPeerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.latencyMs != null && Object.hasOwnProperty.call(message, "latencyMs"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.latencyMs);
            return writer;
        };

        /**
         * Encodes the specified DirectConnectedPeerInfo message, length delimited. Does not implicitly {@link peer_rpc.DirectConnectedPeerInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof peer_rpc.DirectConnectedPeerInfo
         * @static
         * @param {peer_rpc.IDirectConnectedPeerInfo} message DirectConnectedPeerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DirectConnectedPeerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DirectConnectedPeerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof peer_rpc.DirectConnectedPeerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {peer_rpc.DirectConnectedPeerInfo} DirectConnectedPeerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DirectConnectedPeerInfo.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.peer_rpc.DirectConnectedPeerInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.latencyMs = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DirectConnectedPeerInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof peer_rpc.DirectConnectedPeerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {peer_rpc.DirectConnectedPeerInfo} DirectConnectedPeerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DirectConnectedPeerInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DirectConnectedPeerInfo message.
         * @function verify
         * @memberof peer_rpc.DirectConnectedPeerInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DirectConnectedPeerInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.latencyMs != null && message.hasOwnProperty("latencyMs"))
                if (!$util.isInteger(message.latencyMs))
                    return "latencyMs: integer expected";
            return null;
        };

        /**
         * Creates a DirectConnectedPeerInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof peer_rpc.DirectConnectedPeerInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {peer_rpc.DirectConnectedPeerInfo} DirectConnectedPeerInfo
         */
        DirectConnectedPeerInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.peer_rpc.DirectConnectedPeerInfo)
                return object;
            let message = new $root.peer_rpc.DirectConnectedPeerInfo();
            if (object.latencyMs != null)
                message.latencyMs = object.latencyMs | 0;
            return message;
        };

        /**
         * Creates a plain object from a DirectConnectedPeerInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof peer_rpc.DirectConnectedPeerInfo
         * @static
         * @param {peer_rpc.DirectConnectedPeerInfo} message DirectConnectedPeerInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DirectConnectedPeerInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.latencyMs = 0;
            if (message.latencyMs != null && message.hasOwnProperty("latencyMs"))
                object.latencyMs = message.latencyMs;
            return object;
        };

        /**
         * Converts this DirectConnectedPeerInfo to JSON.
         * @function toJSON
         * @memberof peer_rpc.DirectConnectedPeerInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DirectConnectedPeerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DirectConnectedPeerInfo
         * @function getTypeUrl
         * @memberof peer_rpc.DirectConnectedPeerInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DirectConnectedPeerInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/peer_rpc.DirectConnectedPeerInfo";
        };

        return DirectConnectedPeerInfo;
    })();

    peer_rpc.PeerInfoForGlobalMap = (function() {

        /**
         * Properties of a PeerInfoForGlobalMap.
         * @memberof peer_rpc
         * @interface IPeerInfoForGlobalMap
         * @property {Object.<string,peer_rpc.IDirectConnectedPeerInfo>|null} [directPeers] PeerInfoForGlobalMap directPeers
         */

        /**
         * Constructs a new PeerInfoForGlobalMap.
         * @memberof peer_rpc
         * @classdesc Represents a PeerInfoForGlobalMap.
         * @implements IPeerInfoForGlobalMap
         * @constructor
         * @param {peer_rpc.IPeerInfoForGlobalMap=} [properties] Properties to set
         */
        function PeerInfoForGlobalMap(properties) {
            this.directPeers = {};
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PeerInfoForGlobalMap directPeers.
         * @member {Object.<string,peer_rpc.IDirectConnectedPeerInfo>} directPeers
         * @memberof peer_rpc.PeerInfoForGlobalMap
         * @instance
         */
        PeerInfoForGlobalMap.prototype.directPeers = $util.emptyObject;

        /**
         * Creates a new PeerInfoForGlobalMap instance using the specified properties.
         * @function create
         * @memberof peer_rpc.PeerInfoForGlobalMap
         * @static
         * @param {peer_rpc.IPeerInfoForGlobalMap=} [properties] Properties to set
         * @returns {peer_rpc.PeerInfoForGlobalMap} PeerInfoForGlobalMap instance
         */
        PeerInfoForGlobalMap.create = function create(properties) {
            return new PeerInfoForGlobalMap(properties);
        };

        /**
         * Encodes the specified PeerInfoForGlobalMap message. Does not implicitly {@link peer_rpc.PeerInfoForGlobalMap.verify|verify} messages.
         * @function encode
         * @memberof peer_rpc.PeerInfoForGlobalMap
         * @static
         * @param {peer_rpc.IPeerInfoForGlobalMap} message PeerInfoForGlobalMap message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PeerInfoForGlobalMap.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.directPeers != null && Object.hasOwnProperty.call(message, "directPeers"))
                for (let keys = Object.keys(message.directPeers), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).uint32(keys[i]);
                    $root.peer_rpc.DirectConnectedPeerInfo.encode(message.directPeers[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            return writer;
        };

        /**
         * Encodes the specified PeerInfoForGlobalMap message, length delimited. Does not implicitly {@link peer_rpc.PeerInfoForGlobalMap.verify|verify} messages.
         * @function encodeDelimited
         * @memberof peer_rpc.PeerInfoForGlobalMap
         * @static
         * @param {peer_rpc.IPeerInfoForGlobalMap} message PeerInfoForGlobalMap message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PeerInfoForGlobalMap.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PeerInfoForGlobalMap message from the specified reader or buffer.
         * @function decode
         * @memberof peer_rpc.PeerInfoForGlobalMap
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {peer_rpc.PeerInfoForGlobalMap} PeerInfoForGlobalMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PeerInfoForGlobalMap.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.peer_rpc.PeerInfoForGlobalMap(), key, value;
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (message.directPeers === $util.emptyObject)
                            message.directPeers = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = null;
                        while (reader.pos < end2) {
                            let tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.uint32();
                                break;
                            case 2:
                                value = $root.peer_rpc.DirectConnectedPeerInfo.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.directPeers[key] = value;
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PeerInfoForGlobalMap message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof peer_rpc.PeerInfoForGlobalMap
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {peer_rpc.PeerInfoForGlobalMap} PeerInfoForGlobalMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PeerInfoForGlobalMap.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PeerInfoForGlobalMap message.
         * @function verify
         * @memberof peer_rpc.PeerInfoForGlobalMap
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PeerInfoForGlobalMap.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.directPeers != null && message.hasOwnProperty("directPeers")) {
                if (!$util.isObject(message.directPeers))
                    return "directPeers: object expected";
                let key = Object.keys(message.directPeers);
                for (let i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "directPeers: integer key{k:uint32} expected";
                    {
                        let error = $root.peer_rpc.DirectConnectedPeerInfo.verify(message.directPeers[key[i]]);
                        if (error)
                            return "directPeers." + error;
                    }
                }
            }
            return null;
        };

        /**
         * Creates a PeerInfoForGlobalMap message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof peer_rpc.PeerInfoForGlobalMap
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {peer_rpc.PeerInfoForGlobalMap} PeerInfoForGlobalMap
         */
        PeerInfoForGlobalMap.fromObject = function fromObject(object) {
            if (object instanceof $root.peer_rpc.PeerInfoForGlobalMap)
                return object;
            let message = new $root.peer_rpc.PeerInfoForGlobalMap();
            if (object.directPeers) {
                if (typeof object.directPeers !== "object")
                    throw TypeError(".peer_rpc.PeerInfoForGlobalMap.directPeers: object expected");
                message.directPeers = {};
                for (let keys = Object.keys(object.directPeers), i = 0; i < keys.length; ++i) {
                    if (typeof object.directPeers[keys[i]] !== "object")
                        throw TypeError(".peer_rpc.PeerInfoForGlobalMap.directPeers: object expected");
                    message.directPeers[keys[i]] = $root.peer_rpc.DirectConnectedPeerInfo.fromObject(object.directPeers[keys[i]]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a PeerInfoForGlobalMap message. Also converts values to other types if specified.
         * @function toObject
         * @memberof peer_rpc.PeerInfoForGlobalMap
         * @static
         * @param {peer_rpc.PeerInfoForGlobalMap} message PeerInfoForGlobalMap
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PeerInfoForGlobalMap.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.objects || options.defaults)
                object.directPeers = {};
            let keys2;
            if (message.directPeers && (keys2 = Object.keys(message.directPeers)).length) {
                object.directPeers = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.directPeers[keys2[j]] = $root.peer_rpc.DirectConnectedPeerInfo.toObject(message.directPeers[keys2[j]], options);
            }
            return object;
        };

        /**
         * Converts this PeerInfoForGlobalMap to JSON.
         * @function toJSON
         * @memberof peer_rpc.PeerInfoForGlobalMap
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PeerInfoForGlobalMap.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PeerInfoForGlobalMap
         * @function getTypeUrl
         * @memberof peer_rpc.PeerInfoForGlobalMap
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PeerInfoForGlobalMap.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/peer_rpc.PeerInfoForGlobalMap";
        };

        return PeerInfoForGlobalMap;
    })();

    peer_rpc.ReportPeersRequest = (function() {

        /**
         * Properties of a ReportPeersRequest.
         * @memberof peer_rpc
         * @interface IReportPeersRequest
         * @property {number|null} [myPeerId] ReportPeersRequest myPeerId
         * @property {peer_rpc.IPeerInfoForGlobalMap|null} [peerInfos] ReportPeersRequest peerInfos
         */

        /**
         * Constructs a new ReportPeersRequest.
         * @memberof peer_rpc
         * @classdesc Represents a ReportPeersRequest.
         * @implements IReportPeersRequest
         * @constructor
         * @param {peer_rpc.IReportPeersRequest=} [properties] Properties to set
         */
        function ReportPeersRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReportPeersRequest myPeerId.
         * @member {number} myPeerId
         * @memberof peer_rpc.ReportPeersRequest
         * @instance
         */
        ReportPeersRequest.prototype.myPeerId = 0;

        /**
         * ReportPeersRequest peerInfos.
         * @member {peer_rpc.IPeerInfoForGlobalMap|null|undefined} peerInfos
         * @memberof peer_rpc.ReportPeersRequest
         * @instance
         */
        ReportPeersRequest.prototype.peerInfos = null;

        /**
         * Creates a new ReportPeersRequest instance using the specified properties.
         * @function create
         * @memberof peer_rpc.ReportPeersRequest
         * @static
         * @param {peer_rpc.IReportPeersRequest=} [properties] Properties to set
         * @returns {peer_rpc.ReportPeersRequest} ReportPeersRequest instance
         */
        ReportPeersRequest.create = function create(properties) {
            return new ReportPeersRequest(properties);
        };

        /**
         * Encodes the specified ReportPeersRequest message. Does not implicitly {@link peer_rpc.ReportPeersRequest.verify|verify} messages.
         * @function encode
         * @memberof peer_rpc.ReportPeersRequest
         * @static
         * @param {peer_rpc.IReportPeersRequest} message ReportPeersRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReportPeersRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.myPeerId != null && Object.hasOwnProperty.call(message, "myPeerId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.myPeerId);
            if (message.peerInfos != null && Object.hasOwnProperty.call(message, "peerInfos"))
                $root.peer_rpc.PeerInfoForGlobalMap.encode(message.peerInfos, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ReportPeersRequest message, length delimited. Does not implicitly {@link peer_rpc.ReportPeersRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof peer_rpc.ReportPeersRequest
         * @static
         * @param {peer_rpc.IReportPeersRequest} message ReportPeersRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReportPeersRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReportPeersRequest message from the specified reader or buffer.
         * @function decode
         * @memberof peer_rpc.ReportPeersRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {peer_rpc.ReportPeersRequest} ReportPeersRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReportPeersRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.peer_rpc.ReportPeersRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.myPeerId = reader.uint32();
                        break;
                    }
                case 2: {
                        message.peerInfos = $root.peer_rpc.PeerInfoForGlobalMap.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReportPeersRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof peer_rpc.ReportPeersRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {peer_rpc.ReportPeersRequest} ReportPeersRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReportPeersRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReportPeersRequest message.
         * @function verify
         * @memberof peer_rpc.ReportPeersRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReportPeersRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.myPeerId != null && message.hasOwnProperty("myPeerId"))
                if (!$util.isInteger(message.myPeerId))
                    return "myPeerId: integer expected";
            if (message.peerInfos != null && message.hasOwnProperty("peerInfos")) {
                let error = $root.peer_rpc.PeerInfoForGlobalMap.verify(message.peerInfos);
                if (error)
                    return "peerInfos." + error;
            }
            return null;
        };

        /**
         * Creates a ReportPeersRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof peer_rpc.ReportPeersRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {peer_rpc.ReportPeersRequest} ReportPeersRequest
         */
        ReportPeersRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.peer_rpc.ReportPeersRequest)
                return object;
            let message = new $root.peer_rpc.ReportPeersRequest();
            if (object.myPeerId != null)
                message.myPeerId = object.myPeerId >>> 0;
            if (object.peerInfos != null) {
                if (typeof object.peerInfos !== "object")
                    throw TypeError(".peer_rpc.ReportPeersRequest.peerInfos: object expected");
                message.peerInfos = $root.peer_rpc.PeerInfoForGlobalMap.fromObject(object.peerInfos);
            }
            return message;
        };

        /**
         * Creates a plain object from a ReportPeersRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof peer_rpc.ReportPeersRequest
         * @static
         * @param {peer_rpc.ReportPeersRequest} message ReportPeersRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReportPeersRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.myPeerId = 0;
                object.peerInfos = null;
            }
            if (message.myPeerId != null && message.hasOwnProperty("myPeerId"))
                object.myPeerId = message.myPeerId;
            if (message.peerInfos != null && message.hasOwnProperty("peerInfos"))
                object.peerInfos = $root.peer_rpc.PeerInfoForGlobalMap.toObject(message.peerInfos, options);
            return object;
        };

        /**
         * Converts this ReportPeersRequest to JSON.
         * @function toJSON
         * @memberof peer_rpc.ReportPeersRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReportPeersRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReportPeersRequest
         * @function getTypeUrl
         * @memberof peer_rpc.ReportPeersRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReportPeersRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/peer_rpc.ReportPeersRequest";
        };

        return ReportPeersRequest;
    })();

    peer_rpc.ReportPeersResponse = (function() {

        /**
         * Properties of a ReportPeersResponse.
         * @memberof peer_rpc
         * @interface IReportPeersResponse
         */

        /**
         * Constructs a new ReportPeersResponse.
         * @memberof peer_rpc
         * @classdesc Represents a ReportPeersResponse.
         * @implements IReportPeersResponse
         * @constructor
         * @param {peer_rpc.IReportPeersResponse=} [properties] Properties to set
         */
        function ReportPeersResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ReportPeersResponse instance using the specified properties.
         * @function create
         * @memberof peer_rpc.ReportPeersResponse
         * @static
         * @param {peer_rpc.IReportPeersResponse=} [properties] Properties to set
         * @returns {peer_rpc.ReportPeersResponse} ReportPeersResponse instance
         */
        ReportPeersResponse.create = function create(properties) {
            return new ReportPeersResponse(properties);
        };

        /**
         * Encodes the specified ReportPeersResponse message. Does not implicitly {@link peer_rpc.ReportPeersResponse.verify|verify} messages.
         * @function encode
         * @memberof peer_rpc.ReportPeersResponse
         * @static
         * @param {peer_rpc.IReportPeersResponse} message ReportPeersResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReportPeersResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ReportPeersResponse message, length delimited. Does not implicitly {@link peer_rpc.ReportPeersResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof peer_rpc.ReportPeersResponse
         * @static
         * @param {peer_rpc.IReportPeersResponse} message ReportPeersResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReportPeersResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReportPeersResponse message from the specified reader or buffer.
         * @function decode
         * @memberof peer_rpc.ReportPeersResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {peer_rpc.ReportPeersResponse} ReportPeersResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReportPeersResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.peer_rpc.ReportPeersResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReportPeersResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof peer_rpc.ReportPeersResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {peer_rpc.ReportPeersResponse} ReportPeersResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReportPeersResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReportPeersResponse message.
         * @function verify
         * @memberof peer_rpc.ReportPeersResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReportPeersResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a ReportPeersResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof peer_rpc.ReportPeersResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {peer_rpc.ReportPeersResponse} ReportPeersResponse
         */
        ReportPeersResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.peer_rpc.ReportPeersResponse)
                return object;
            return new $root.peer_rpc.ReportPeersResponse();
        };

        /**
         * Creates a plain object from a ReportPeersResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof peer_rpc.ReportPeersResponse
         * @static
         * @param {peer_rpc.ReportPeersResponse} message ReportPeersResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReportPeersResponse.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ReportPeersResponse to JSON.
         * @function toJSON
         * @memberof peer_rpc.ReportPeersResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReportPeersResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReportPeersResponse
         * @function getTypeUrl
         * @memberof peer_rpc.ReportPeersResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReportPeersResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/peer_rpc.ReportPeersResponse";
        };

        return ReportPeersResponse;
    })();

    peer_rpc.GlobalPeerMap = (function() {

        /**
         * Properties of a GlobalPeerMap.
         * @memberof peer_rpc
         * @interface IGlobalPeerMap
         * @property {Object.<string,peer_rpc.IPeerInfoForGlobalMap>|null} [map] GlobalPeerMap map
         */

        /**
         * Constructs a new GlobalPeerMap.
         * @memberof peer_rpc
         * @classdesc Represents a GlobalPeerMap.
         * @implements IGlobalPeerMap
         * @constructor
         * @param {peer_rpc.IGlobalPeerMap=} [properties] Properties to set
         */
        function GlobalPeerMap(properties) {
            this.map = {};
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GlobalPeerMap map.
         * @member {Object.<string,peer_rpc.IPeerInfoForGlobalMap>} map
         * @memberof peer_rpc.GlobalPeerMap
         * @instance
         */
        GlobalPeerMap.prototype.map = $util.emptyObject;

        /**
         * Creates a new GlobalPeerMap instance using the specified properties.
         * @function create
         * @memberof peer_rpc.GlobalPeerMap
         * @static
         * @param {peer_rpc.IGlobalPeerMap=} [properties] Properties to set
         * @returns {peer_rpc.GlobalPeerMap} GlobalPeerMap instance
         */
        GlobalPeerMap.create = function create(properties) {
            return new GlobalPeerMap(properties);
        };

        /**
         * Encodes the specified GlobalPeerMap message. Does not implicitly {@link peer_rpc.GlobalPeerMap.verify|verify} messages.
         * @function encode
         * @memberof peer_rpc.GlobalPeerMap
         * @static
         * @param {peer_rpc.IGlobalPeerMap} message GlobalPeerMap message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GlobalPeerMap.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.map != null && Object.hasOwnProperty.call(message, "map"))
                for (let keys = Object.keys(message.map), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).uint32(keys[i]);
                    $root.peer_rpc.PeerInfoForGlobalMap.encode(message.map[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            return writer;
        };

        /**
         * Encodes the specified GlobalPeerMap message, length delimited. Does not implicitly {@link peer_rpc.GlobalPeerMap.verify|verify} messages.
         * @function encodeDelimited
         * @memberof peer_rpc.GlobalPeerMap
         * @static
         * @param {peer_rpc.IGlobalPeerMap} message GlobalPeerMap message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GlobalPeerMap.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GlobalPeerMap message from the specified reader or buffer.
         * @function decode
         * @memberof peer_rpc.GlobalPeerMap
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {peer_rpc.GlobalPeerMap} GlobalPeerMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GlobalPeerMap.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.peer_rpc.GlobalPeerMap(), key, value;
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (message.map === $util.emptyObject)
                            message.map = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = null;
                        while (reader.pos < end2) {
                            let tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.uint32();
                                break;
                            case 2:
                                value = $root.peer_rpc.PeerInfoForGlobalMap.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.map[key] = value;
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GlobalPeerMap message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof peer_rpc.GlobalPeerMap
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {peer_rpc.GlobalPeerMap} GlobalPeerMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GlobalPeerMap.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GlobalPeerMap message.
         * @function verify
         * @memberof peer_rpc.GlobalPeerMap
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GlobalPeerMap.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.map != null && message.hasOwnProperty("map")) {
                if (!$util.isObject(message.map))
                    return "map: object expected";
                let key = Object.keys(message.map);
                for (let i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "map: integer key{k:uint32} expected";
                    {
                        let error = $root.peer_rpc.PeerInfoForGlobalMap.verify(message.map[key[i]]);
                        if (error)
                            return "map." + error;
                    }
                }
            }
            return null;
        };

        /**
         * Creates a GlobalPeerMap message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof peer_rpc.GlobalPeerMap
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {peer_rpc.GlobalPeerMap} GlobalPeerMap
         */
        GlobalPeerMap.fromObject = function fromObject(object) {
            if (object instanceof $root.peer_rpc.GlobalPeerMap)
                return object;
            let message = new $root.peer_rpc.GlobalPeerMap();
            if (object.map) {
                if (typeof object.map !== "object")
                    throw TypeError(".peer_rpc.GlobalPeerMap.map: object expected");
                message.map = {};
                for (let keys = Object.keys(object.map), i = 0; i < keys.length; ++i) {
                    if (typeof object.map[keys[i]] !== "object")
                        throw TypeError(".peer_rpc.GlobalPeerMap.map: object expected");
                    message.map[keys[i]] = $root.peer_rpc.PeerInfoForGlobalMap.fromObject(object.map[keys[i]]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GlobalPeerMap message. Also converts values to other types if specified.
         * @function toObject
         * @memberof peer_rpc.GlobalPeerMap
         * @static
         * @param {peer_rpc.GlobalPeerMap} message GlobalPeerMap
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GlobalPeerMap.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.objects || options.defaults)
                object.map = {};
            let keys2;
            if (message.map && (keys2 = Object.keys(message.map)).length) {
                object.map = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.map[keys2[j]] = $root.peer_rpc.PeerInfoForGlobalMap.toObject(message.map[keys2[j]], options);
            }
            return object;
        };

        /**
         * Converts this GlobalPeerMap to JSON.
         * @function toJSON
         * @memberof peer_rpc.GlobalPeerMap
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GlobalPeerMap.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GlobalPeerMap
         * @function getTypeUrl
         * @memberof peer_rpc.GlobalPeerMap
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GlobalPeerMap.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/peer_rpc.GlobalPeerMap";
        };

        return GlobalPeerMap;
    })();

    peer_rpc.GetGlobalPeerMapRequest = (function() {

        /**
         * Properties of a GetGlobalPeerMapRequest.
         * @memberof peer_rpc
         * @interface IGetGlobalPeerMapRequest
         * @property {number|Long|null} [digest] GetGlobalPeerMapRequest digest
         */

        /**
         * Constructs a new GetGlobalPeerMapRequest.
         * @memberof peer_rpc
         * @classdesc Represents a GetGlobalPeerMapRequest.
         * @implements IGetGlobalPeerMapRequest
         * @constructor
         * @param {peer_rpc.IGetGlobalPeerMapRequest=} [properties] Properties to set
         */
        function GetGlobalPeerMapRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetGlobalPeerMapRequest digest.
         * @member {number|Long} digest
         * @memberof peer_rpc.GetGlobalPeerMapRequest
         * @instance
         */
        GetGlobalPeerMapRequest.prototype.digest = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new GetGlobalPeerMapRequest instance using the specified properties.
         * @function create
         * @memberof peer_rpc.GetGlobalPeerMapRequest
         * @static
         * @param {peer_rpc.IGetGlobalPeerMapRequest=} [properties] Properties to set
         * @returns {peer_rpc.GetGlobalPeerMapRequest} GetGlobalPeerMapRequest instance
         */
        GetGlobalPeerMapRequest.create = function create(properties) {
            return new GetGlobalPeerMapRequest(properties);
        };

        /**
         * Encodes the specified GetGlobalPeerMapRequest message. Does not implicitly {@link peer_rpc.GetGlobalPeerMapRequest.verify|verify} messages.
         * @function encode
         * @memberof peer_rpc.GetGlobalPeerMapRequest
         * @static
         * @param {peer_rpc.IGetGlobalPeerMapRequest} message GetGlobalPeerMapRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGlobalPeerMapRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.digest != null && Object.hasOwnProperty.call(message, "digest"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.digest);
            return writer;
        };

        /**
         * Encodes the specified GetGlobalPeerMapRequest message, length delimited. Does not implicitly {@link peer_rpc.GetGlobalPeerMapRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof peer_rpc.GetGlobalPeerMapRequest
         * @static
         * @param {peer_rpc.IGetGlobalPeerMapRequest} message GetGlobalPeerMapRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGlobalPeerMapRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetGlobalPeerMapRequest message from the specified reader or buffer.
         * @function decode
         * @memberof peer_rpc.GetGlobalPeerMapRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {peer_rpc.GetGlobalPeerMapRequest} GetGlobalPeerMapRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGlobalPeerMapRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.peer_rpc.GetGlobalPeerMapRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.digest = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetGlobalPeerMapRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof peer_rpc.GetGlobalPeerMapRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {peer_rpc.GetGlobalPeerMapRequest} GetGlobalPeerMapRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGlobalPeerMapRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetGlobalPeerMapRequest message.
         * @function verify
         * @memberof peer_rpc.GetGlobalPeerMapRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetGlobalPeerMapRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.digest != null && message.hasOwnProperty("digest"))
                if (!$util.isInteger(message.digest) && !(message.digest && $util.isInteger(message.digest.low) && $util.isInteger(message.digest.high)))
                    return "digest: integer|Long expected";
            return null;
        };

        /**
         * Creates a GetGlobalPeerMapRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof peer_rpc.GetGlobalPeerMapRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {peer_rpc.GetGlobalPeerMapRequest} GetGlobalPeerMapRequest
         */
        GetGlobalPeerMapRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.peer_rpc.GetGlobalPeerMapRequest)
                return object;
            let message = new $root.peer_rpc.GetGlobalPeerMapRequest();
            if (object.digest != null)
                if ($util.Long)
                    (message.digest = $util.Long.fromValue(object.digest)).unsigned = true;
                else if (typeof object.digest === "string")
                    message.digest = parseInt(object.digest, 10);
                else if (typeof object.digest === "number")
                    message.digest = object.digest;
                else if (typeof object.digest === "object")
                    message.digest = new $util.LongBits(object.digest.low >>> 0, object.digest.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a GetGlobalPeerMapRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof peer_rpc.GetGlobalPeerMapRequest
         * @static
         * @param {peer_rpc.GetGlobalPeerMapRequest} message GetGlobalPeerMapRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetGlobalPeerMapRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.digest = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.digest = options.longs === String ? "0" : 0;
            if (message.digest != null && message.hasOwnProperty("digest"))
                if (typeof message.digest === "number")
                    object.digest = options.longs === String ? String(message.digest) : message.digest;
                else
                    object.digest = options.longs === String ? $util.Long.prototype.toString.call(message.digest) : options.longs === Number ? new $util.LongBits(message.digest.low >>> 0, message.digest.high >>> 0).toNumber(true) : message.digest;
            return object;
        };

        /**
         * Converts this GetGlobalPeerMapRequest to JSON.
         * @function toJSON
         * @memberof peer_rpc.GetGlobalPeerMapRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetGlobalPeerMapRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetGlobalPeerMapRequest
         * @function getTypeUrl
         * @memberof peer_rpc.GetGlobalPeerMapRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetGlobalPeerMapRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/peer_rpc.GetGlobalPeerMapRequest";
        };

        return GetGlobalPeerMapRequest;
    })();

    peer_rpc.GetGlobalPeerMapResponse = (function() {

        /**
         * Properties of a GetGlobalPeerMapResponse.
         * @memberof peer_rpc
         * @interface IGetGlobalPeerMapResponse
         * @property {Object.<string,peer_rpc.IPeerInfoForGlobalMap>|null} [globalPeerMap] GetGlobalPeerMapResponse globalPeerMap
         * @property {number|Long|null} [digest] GetGlobalPeerMapResponse digest
         */

        /**
         * Constructs a new GetGlobalPeerMapResponse.
         * @memberof peer_rpc
         * @classdesc Represents a GetGlobalPeerMapResponse.
         * @implements IGetGlobalPeerMapResponse
         * @constructor
         * @param {peer_rpc.IGetGlobalPeerMapResponse=} [properties] Properties to set
         */
        function GetGlobalPeerMapResponse(properties) {
            this.globalPeerMap = {};
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetGlobalPeerMapResponse globalPeerMap.
         * @member {Object.<string,peer_rpc.IPeerInfoForGlobalMap>} globalPeerMap
         * @memberof peer_rpc.GetGlobalPeerMapResponse
         * @instance
         */
        GetGlobalPeerMapResponse.prototype.globalPeerMap = $util.emptyObject;

        /**
         * GetGlobalPeerMapResponse digest.
         * @member {number|Long|null|undefined} digest
         * @memberof peer_rpc.GetGlobalPeerMapResponse
         * @instance
         */
        GetGlobalPeerMapResponse.prototype.digest = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(GetGlobalPeerMapResponse.prototype, "_digest", {
            get: $util.oneOfGetter($oneOfFields = ["digest"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new GetGlobalPeerMapResponse instance using the specified properties.
         * @function create
         * @memberof peer_rpc.GetGlobalPeerMapResponse
         * @static
         * @param {peer_rpc.IGetGlobalPeerMapResponse=} [properties] Properties to set
         * @returns {peer_rpc.GetGlobalPeerMapResponse} GetGlobalPeerMapResponse instance
         */
        GetGlobalPeerMapResponse.create = function create(properties) {
            return new GetGlobalPeerMapResponse(properties);
        };

        /**
         * Encodes the specified GetGlobalPeerMapResponse message. Does not implicitly {@link peer_rpc.GetGlobalPeerMapResponse.verify|verify} messages.
         * @function encode
         * @memberof peer_rpc.GetGlobalPeerMapResponse
         * @static
         * @param {peer_rpc.IGetGlobalPeerMapResponse} message GetGlobalPeerMapResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGlobalPeerMapResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.globalPeerMap != null && Object.hasOwnProperty.call(message, "globalPeerMap"))
                for (let keys = Object.keys(message.globalPeerMap), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).uint32(keys[i]);
                    $root.peer_rpc.PeerInfoForGlobalMap.encode(message.globalPeerMap[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            if (message.digest != null && Object.hasOwnProperty.call(message, "digest"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.digest);
            return writer;
        };

        /**
         * Encodes the specified GetGlobalPeerMapResponse message, length delimited. Does not implicitly {@link peer_rpc.GetGlobalPeerMapResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof peer_rpc.GetGlobalPeerMapResponse
         * @static
         * @param {peer_rpc.IGetGlobalPeerMapResponse} message GetGlobalPeerMapResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGlobalPeerMapResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetGlobalPeerMapResponse message from the specified reader or buffer.
         * @function decode
         * @memberof peer_rpc.GetGlobalPeerMapResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {peer_rpc.GetGlobalPeerMapResponse} GetGlobalPeerMapResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGlobalPeerMapResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.peer_rpc.GetGlobalPeerMapResponse(), key, value;
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (message.globalPeerMap === $util.emptyObject)
                            message.globalPeerMap = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = null;
                        while (reader.pos < end2) {
                            let tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.uint32();
                                break;
                            case 2:
                                value = $root.peer_rpc.PeerInfoForGlobalMap.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.globalPeerMap[key] = value;
                        break;
                    }
                case 2: {
                        message.digest = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetGlobalPeerMapResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof peer_rpc.GetGlobalPeerMapResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {peer_rpc.GetGlobalPeerMapResponse} GetGlobalPeerMapResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGlobalPeerMapResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetGlobalPeerMapResponse message.
         * @function verify
         * @memberof peer_rpc.GetGlobalPeerMapResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetGlobalPeerMapResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.globalPeerMap != null && message.hasOwnProperty("globalPeerMap")) {
                if (!$util.isObject(message.globalPeerMap))
                    return "globalPeerMap: object expected";
                let key = Object.keys(message.globalPeerMap);
                for (let i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "globalPeerMap: integer key{k:uint32} expected";
                    {
                        let error = $root.peer_rpc.PeerInfoForGlobalMap.verify(message.globalPeerMap[key[i]]);
                        if (error)
                            return "globalPeerMap." + error;
                    }
                }
            }
            if (message.digest != null && message.hasOwnProperty("digest")) {
                properties._digest = 1;
                if (!$util.isInteger(message.digest) && !(message.digest && $util.isInteger(message.digest.low) && $util.isInteger(message.digest.high)))
                    return "digest: integer|Long expected";
            }
            return null;
        };

        /**
         * Creates a GetGlobalPeerMapResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof peer_rpc.GetGlobalPeerMapResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {peer_rpc.GetGlobalPeerMapResponse} GetGlobalPeerMapResponse
         */
        GetGlobalPeerMapResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.peer_rpc.GetGlobalPeerMapResponse)
                return object;
            let message = new $root.peer_rpc.GetGlobalPeerMapResponse();
            if (object.globalPeerMap) {
                if (typeof object.globalPeerMap !== "object")
                    throw TypeError(".peer_rpc.GetGlobalPeerMapResponse.globalPeerMap: object expected");
                message.globalPeerMap = {};
                for (let keys = Object.keys(object.globalPeerMap), i = 0; i < keys.length; ++i) {
                    if (typeof object.globalPeerMap[keys[i]] !== "object")
                        throw TypeError(".peer_rpc.GetGlobalPeerMapResponse.globalPeerMap: object expected");
                    message.globalPeerMap[keys[i]] = $root.peer_rpc.PeerInfoForGlobalMap.fromObject(object.globalPeerMap[keys[i]]);
                }
            }
            if (object.digest != null)
                if ($util.Long)
                    (message.digest = $util.Long.fromValue(object.digest)).unsigned = true;
                else if (typeof object.digest === "string")
                    message.digest = parseInt(object.digest, 10);
                else if (typeof object.digest === "number")
                    message.digest = object.digest;
                else if (typeof object.digest === "object")
                    message.digest = new $util.LongBits(object.digest.low >>> 0, object.digest.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a GetGlobalPeerMapResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof peer_rpc.GetGlobalPeerMapResponse
         * @static
         * @param {peer_rpc.GetGlobalPeerMapResponse} message GetGlobalPeerMapResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetGlobalPeerMapResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.objects || options.defaults)
                object.globalPeerMap = {};
            let keys2;
            if (message.globalPeerMap && (keys2 = Object.keys(message.globalPeerMap)).length) {
                object.globalPeerMap = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.globalPeerMap[keys2[j]] = $root.peer_rpc.PeerInfoForGlobalMap.toObject(message.globalPeerMap[keys2[j]], options);
            }
            if (message.digest != null && message.hasOwnProperty("digest")) {
                if (typeof message.digest === "number")
                    object.digest = options.longs === String ? String(message.digest) : message.digest;
                else
                    object.digest = options.longs === String ? $util.Long.prototype.toString.call(message.digest) : options.longs === Number ? new $util.LongBits(message.digest.low >>> 0, message.digest.high >>> 0).toNumber(true) : message.digest;
                if (options.oneofs)
                    object._digest = "digest";
            }
            return object;
        };

        /**
         * Converts this GetGlobalPeerMapResponse to JSON.
         * @function toJSON
         * @memberof peer_rpc.GetGlobalPeerMapResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetGlobalPeerMapResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetGlobalPeerMapResponse
         * @function getTypeUrl
         * @memberof peer_rpc.GetGlobalPeerMapResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetGlobalPeerMapResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/peer_rpc.GetGlobalPeerMapResponse";
        };

        return GetGlobalPeerMapResponse;
    })();

    peer_rpc.PeerCenterRpc = (function() {

        /**
         * Constructs a new PeerCenterRpc service.
         * @memberof peer_rpc
         * @classdesc Represents a PeerCenterRpc
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function PeerCenterRpc(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (PeerCenterRpc.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = PeerCenterRpc;

        /**
         * Creates new PeerCenterRpc service using the specified rpc implementation.
         * @function create
         * @memberof peer_rpc.PeerCenterRpc
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {PeerCenterRpc} RPC service. Useful where requests and/or responses are streamed.
         */
        PeerCenterRpc.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link peer_rpc.PeerCenterRpc#reportPeers}.
         * @memberof peer_rpc.PeerCenterRpc
         * @typedef ReportPeersCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {peer_rpc.ReportPeersResponse} [response] ReportPeersResponse
         */

        /**
         * Calls ReportPeers.
         * @function reportPeers
         * @memberof peer_rpc.PeerCenterRpc
         * @instance
         * @param {peer_rpc.IReportPeersRequest} request ReportPeersRequest message or plain object
         * @param {peer_rpc.PeerCenterRpc.ReportPeersCallback} callback Node-style callback called with the error, if any, and ReportPeersResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(PeerCenterRpc.prototype.reportPeers = function reportPeers(request, callback) {
            return this.rpcCall(reportPeers, $root.peer_rpc.ReportPeersRequest, $root.peer_rpc.ReportPeersResponse, request, callback);
        }, "name", { value: "ReportPeers" });

        /**
         * Calls ReportPeers.
         * @function reportPeers
         * @memberof peer_rpc.PeerCenterRpc
         * @instance
         * @param {peer_rpc.IReportPeersRequest} request ReportPeersRequest message or plain object
         * @returns {Promise<peer_rpc.ReportPeersResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link peer_rpc.PeerCenterRpc#getGlobalPeerMap}.
         * @memberof peer_rpc.PeerCenterRpc
         * @typedef GetGlobalPeerMapCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {peer_rpc.GetGlobalPeerMapResponse} [response] GetGlobalPeerMapResponse
         */

        /**
         * Calls GetGlobalPeerMap.
         * @function getGlobalPeerMap
         * @memberof peer_rpc.PeerCenterRpc
         * @instance
         * @param {peer_rpc.IGetGlobalPeerMapRequest} request GetGlobalPeerMapRequest message or plain object
         * @param {peer_rpc.PeerCenterRpc.GetGlobalPeerMapCallback} callback Node-style callback called with the error, if any, and GetGlobalPeerMapResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(PeerCenterRpc.prototype.getGlobalPeerMap = function getGlobalPeerMap(request, callback) {
            return this.rpcCall(getGlobalPeerMap, $root.peer_rpc.GetGlobalPeerMapRequest, $root.peer_rpc.GetGlobalPeerMapResponse, request, callback);
        }, "name", { value: "GetGlobalPeerMap" });

        /**
         * Calls GetGlobalPeerMap.
         * @function getGlobalPeerMap
         * @memberof peer_rpc.PeerCenterRpc
         * @instance
         * @param {peer_rpc.IGetGlobalPeerMapRequest} request GetGlobalPeerMapRequest message or plain object
         * @returns {Promise<peer_rpc.GetGlobalPeerMapResponse>} Promise
         * @variation 2
         */

        return PeerCenterRpc;
    })();

    peer_rpc.HandshakeRequest = (function() {

        /**
         * Properties of a HandshakeRequest.
         * @memberof peer_rpc
         * @interface IHandshakeRequest
         * @property {number|null} [magic] HandshakeRequest magic
         * @property {number|null} [myPeerId] HandshakeRequest myPeerId
         * @property {number|null} [version] HandshakeRequest version
         * @property {Array.<string>|null} [features] HandshakeRequest features
         * @property {string|null} [networkName] HandshakeRequest networkName
         * @property {Uint8Array|null} [networkSecretDigrest] HandshakeRequest networkSecretDigrest
         */

        /**
         * Constructs a new HandshakeRequest.
         * @memberof peer_rpc
         * @classdesc Represents a HandshakeRequest.
         * @implements IHandshakeRequest
         * @constructor
         * @param {peer_rpc.IHandshakeRequest=} [properties] Properties to set
         */
        function HandshakeRequest(properties) {
            this.features = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HandshakeRequest magic.
         * @member {number} magic
         * @memberof peer_rpc.HandshakeRequest
         * @instance
         */
        HandshakeRequest.prototype.magic = 0;

        /**
         * HandshakeRequest myPeerId.
         * @member {number} myPeerId
         * @memberof peer_rpc.HandshakeRequest
         * @instance
         */
        HandshakeRequest.prototype.myPeerId = 0;

        /**
         * HandshakeRequest version.
         * @member {number} version
         * @memberof peer_rpc.HandshakeRequest
         * @instance
         */
        HandshakeRequest.prototype.version = 0;

        /**
         * HandshakeRequest features.
         * @member {Array.<string>} features
         * @memberof peer_rpc.HandshakeRequest
         * @instance
         */
        HandshakeRequest.prototype.features = $util.emptyArray;

        /**
         * HandshakeRequest networkName.
         * @member {string} networkName
         * @memberof peer_rpc.HandshakeRequest
         * @instance
         */
        HandshakeRequest.prototype.networkName = "";

        /**
         * HandshakeRequest networkSecretDigrest.
         * @member {Uint8Array} networkSecretDigrest
         * @memberof peer_rpc.HandshakeRequest
         * @instance
         */
        HandshakeRequest.prototype.networkSecretDigrest = $util.newBuffer([]);

        /**
         * Creates a new HandshakeRequest instance using the specified properties.
         * @function create
         * @memberof peer_rpc.HandshakeRequest
         * @static
         * @param {peer_rpc.IHandshakeRequest=} [properties] Properties to set
         * @returns {peer_rpc.HandshakeRequest} HandshakeRequest instance
         */
        HandshakeRequest.create = function create(properties) {
            return new HandshakeRequest(properties);
        };

        /**
         * Encodes the specified HandshakeRequest message. Does not implicitly {@link peer_rpc.HandshakeRequest.verify|verify} messages.
         * @function encode
         * @memberof peer_rpc.HandshakeRequest
         * @static
         * @param {peer_rpc.IHandshakeRequest} message HandshakeRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HandshakeRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.magic != null && Object.hasOwnProperty.call(message, "magic"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.magic);
            if (message.myPeerId != null && Object.hasOwnProperty.call(message, "myPeerId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.myPeerId);
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.version);
            if (message.features != null && message.features.length)
                for (let i = 0; i < message.features.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.features[i]);
            if (message.networkName != null && Object.hasOwnProperty.call(message, "networkName"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.networkName);
            if (message.networkSecretDigrest != null && Object.hasOwnProperty.call(message, "networkSecretDigrest"))
                writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.networkSecretDigrest);
            return writer;
        };

        /**
         * Encodes the specified HandshakeRequest message, length delimited. Does not implicitly {@link peer_rpc.HandshakeRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof peer_rpc.HandshakeRequest
         * @static
         * @param {peer_rpc.IHandshakeRequest} message HandshakeRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HandshakeRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HandshakeRequest message from the specified reader or buffer.
         * @function decode
         * @memberof peer_rpc.HandshakeRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {peer_rpc.HandshakeRequest} HandshakeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HandshakeRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.peer_rpc.HandshakeRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.magic = reader.uint32();
                        break;
                    }
                case 2: {
                        message.myPeerId = reader.uint32();
                        break;
                    }
                case 3: {
                        message.version = reader.uint32();
                        break;
                    }
                case 4: {
                        if (!(message.features && message.features.length))
                            message.features = [];
                        message.features.push(reader.string());
                        break;
                    }
                case 5: {
                        message.networkName = reader.string();
                        break;
                    }
                case 6: {
                        message.networkSecretDigrest = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HandshakeRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof peer_rpc.HandshakeRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {peer_rpc.HandshakeRequest} HandshakeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HandshakeRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HandshakeRequest message.
         * @function verify
         * @memberof peer_rpc.HandshakeRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HandshakeRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.magic != null && message.hasOwnProperty("magic"))
                if (!$util.isInteger(message.magic))
                    return "magic: integer expected";
            if (message.myPeerId != null && message.hasOwnProperty("myPeerId"))
                if (!$util.isInteger(message.myPeerId))
                    return "myPeerId: integer expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version))
                    return "version: integer expected";
            if (message.features != null && message.hasOwnProperty("features")) {
                if (!Array.isArray(message.features))
                    return "features: array expected";
                for (let i = 0; i < message.features.length; ++i)
                    if (!$util.isString(message.features[i]))
                        return "features: string[] expected";
            }
            if (message.networkName != null && message.hasOwnProperty("networkName"))
                if (!$util.isString(message.networkName))
                    return "networkName: string expected";
            if (message.networkSecretDigrest != null && message.hasOwnProperty("networkSecretDigrest"))
                if (!(message.networkSecretDigrest && typeof message.networkSecretDigrest.length === "number" || $util.isString(message.networkSecretDigrest)))
                    return "networkSecretDigrest: buffer expected";
            return null;
        };

        /**
         * Creates a HandshakeRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof peer_rpc.HandshakeRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {peer_rpc.HandshakeRequest} HandshakeRequest
         */
        HandshakeRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.peer_rpc.HandshakeRequest)
                return object;
            let message = new $root.peer_rpc.HandshakeRequest();
            if (object.magic != null)
                message.magic = object.magic >>> 0;
            if (object.myPeerId != null)
                message.myPeerId = object.myPeerId >>> 0;
            if (object.version != null)
                message.version = object.version >>> 0;
            if (object.features) {
                if (!Array.isArray(object.features))
                    throw TypeError(".peer_rpc.HandshakeRequest.features: array expected");
                message.features = [];
                for (let i = 0; i < object.features.length; ++i)
                    message.features[i] = String(object.features[i]);
            }
            if (object.networkName != null)
                message.networkName = String(object.networkName);
            if (object.networkSecretDigrest != null)
                if (typeof object.networkSecretDigrest === "string")
                    $util.base64.decode(object.networkSecretDigrest, message.networkSecretDigrest = $util.newBuffer($util.base64.length(object.networkSecretDigrest)), 0);
                else if (object.networkSecretDigrest.length >= 0)
                    message.networkSecretDigrest = object.networkSecretDigrest;
            return message;
        };

        /**
         * Creates a plain object from a HandshakeRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof peer_rpc.HandshakeRequest
         * @static
         * @param {peer_rpc.HandshakeRequest} message HandshakeRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HandshakeRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.features = [];
            if (options.defaults) {
                object.magic = 0;
                object.myPeerId = 0;
                object.version = 0;
                object.networkName = "";
                if (options.bytes === String)
                    object.networkSecretDigrest = "";
                else {
                    object.networkSecretDigrest = [];
                    if (options.bytes !== Array)
                        object.networkSecretDigrest = $util.newBuffer(object.networkSecretDigrest);
                }
            }
            if (message.magic != null && message.hasOwnProperty("magic"))
                object.magic = message.magic;
            if (message.myPeerId != null && message.hasOwnProperty("myPeerId"))
                object.myPeerId = message.myPeerId;
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            if (message.features && message.features.length) {
                object.features = [];
                for (let j = 0; j < message.features.length; ++j)
                    object.features[j] = message.features[j];
            }
            if (message.networkName != null && message.hasOwnProperty("networkName"))
                object.networkName = message.networkName;
            if (message.networkSecretDigrest != null && message.hasOwnProperty("networkSecretDigrest"))
                object.networkSecretDigrest = options.bytes === String ? $util.base64.encode(message.networkSecretDigrest, 0, message.networkSecretDigrest.length) : options.bytes === Array ? Array.prototype.slice.call(message.networkSecretDigrest) : message.networkSecretDigrest;
            return object;
        };

        /**
         * Converts this HandshakeRequest to JSON.
         * @function toJSON
         * @memberof peer_rpc.HandshakeRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HandshakeRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HandshakeRequest
         * @function getTypeUrl
         * @memberof peer_rpc.HandshakeRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HandshakeRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/peer_rpc.HandshakeRequest";
        };

        return HandshakeRequest;
    })();

    peer_rpc.KcpConnData = (function() {

        /**
         * Properties of a KcpConnData.
         * @memberof peer_rpc
         * @interface IKcpConnData
         * @property {common.ISocketAddr|null} [src] KcpConnData src
         * @property {common.ISocketAddr|null} [dst] KcpConnData dst
         */

        /**
         * Constructs a new KcpConnData.
         * @memberof peer_rpc
         * @classdesc Represents a KcpConnData.
         * @implements IKcpConnData
         * @constructor
         * @param {peer_rpc.IKcpConnData=} [properties] Properties to set
         */
        function KcpConnData(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * KcpConnData src.
         * @member {common.ISocketAddr|null|undefined} src
         * @memberof peer_rpc.KcpConnData
         * @instance
         */
        KcpConnData.prototype.src = null;

        /**
         * KcpConnData dst.
         * @member {common.ISocketAddr|null|undefined} dst
         * @memberof peer_rpc.KcpConnData
         * @instance
         */
        KcpConnData.prototype.dst = null;

        /**
         * Creates a new KcpConnData instance using the specified properties.
         * @function create
         * @memberof peer_rpc.KcpConnData
         * @static
         * @param {peer_rpc.IKcpConnData=} [properties] Properties to set
         * @returns {peer_rpc.KcpConnData} KcpConnData instance
         */
        KcpConnData.create = function create(properties) {
            return new KcpConnData(properties);
        };

        /**
         * Encodes the specified KcpConnData message. Does not implicitly {@link peer_rpc.KcpConnData.verify|verify} messages.
         * @function encode
         * @memberof peer_rpc.KcpConnData
         * @static
         * @param {peer_rpc.IKcpConnData} message KcpConnData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KcpConnData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.src != null && Object.hasOwnProperty.call(message, "src"))
                $root.common.SocketAddr.encode(message.src, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.dst != null && Object.hasOwnProperty.call(message, "dst"))
                $root.common.SocketAddr.encode(message.dst, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified KcpConnData message, length delimited. Does not implicitly {@link peer_rpc.KcpConnData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof peer_rpc.KcpConnData
         * @static
         * @param {peer_rpc.IKcpConnData} message KcpConnData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KcpConnData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KcpConnData message from the specified reader or buffer.
         * @function decode
         * @memberof peer_rpc.KcpConnData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {peer_rpc.KcpConnData} KcpConnData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KcpConnData.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.peer_rpc.KcpConnData();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.src = $root.common.SocketAddr.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.dst = $root.common.SocketAddr.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a KcpConnData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof peer_rpc.KcpConnData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {peer_rpc.KcpConnData} KcpConnData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KcpConnData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a KcpConnData message.
         * @function verify
         * @memberof peer_rpc.KcpConnData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        KcpConnData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.src != null && message.hasOwnProperty("src")) {
                let error = $root.common.SocketAddr.verify(message.src);
                if (error)
                    return "src." + error;
            }
            if (message.dst != null && message.hasOwnProperty("dst")) {
                let error = $root.common.SocketAddr.verify(message.dst);
                if (error)
                    return "dst." + error;
            }
            return null;
        };

        /**
         * Creates a KcpConnData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof peer_rpc.KcpConnData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {peer_rpc.KcpConnData} KcpConnData
         */
        KcpConnData.fromObject = function fromObject(object) {
            if (object instanceof $root.peer_rpc.KcpConnData)
                return object;
            let message = new $root.peer_rpc.KcpConnData();
            if (object.src != null) {
                if (typeof object.src !== "object")
                    throw TypeError(".peer_rpc.KcpConnData.src: object expected");
                message.src = $root.common.SocketAddr.fromObject(object.src);
            }
            if (object.dst != null) {
                if (typeof object.dst !== "object")
                    throw TypeError(".peer_rpc.KcpConnData.dst: object expected");
                message.dst = $root.common.SocketAddr.fromObject(object.dst);
            }
            return message;
        };

        /**
         * Creates a plain object from a KcpConnData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof peer_rpc.KcpConnData
         * @static
         * @param {peer_rpc.KcpConnData} message KcpConnData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        KcpConnData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.src = null;
                object.dst = null;
            }
            if (message.src != null && message.hasOwnProperty("src"))
                object.src = $root.common.SocketAddr.toObject(message.src, options);
            if (message.dst != null && message.hasOwnProperty("dst"))
                object.dst = $root.common.SocketAddr.toObject(message.dst, options);
            return object;
        };

        /**
         * Converts this KcpConnData to JSON.
         * @function toJSON
         * @memberof peer_rpc.KcpConnData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KcpConnData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for KcpConnData
         * @function getTypeUrl
         * @memberof peer_rpc.KcpConnData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        KcpConnData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/peer_rpc.KcpConnData";
        };

        return KcpConnData;
    })();

    return peer_rpc;
})();

export const google = $root.google = (() => {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    const google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        const protobuf = {};

        protobuf.Timestamp = (function() {

            /**
             * Properties of a Timestamp.
             * @memberof google.protobuf
             * @interface ITimestamp
             * @property {number|Long|null} [seconds] Timestamp seconds
             * @property {number|null} [nanos] Timestamp nanos
             */

            /**
             * Constructs a new Timestamp.
             * @memberof google.protobuf
             * @classdesc Represents a Timestamp.
             * @implements ITimestamp
             * @constructor
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             */
            function Timestamp(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Timestamp seconds.
             * @member {number|Long} seconds
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Timestamp nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.nanos = 0;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             * @returns {google.protobuf.Timestamp} Timestamp instance
             */
            Timestamp.create = function create(properties) {
                return new Timestamp(properties);
            };

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.seconds = reader.int64();
                            break;
                        }
                    case 2: {
                            message.nanos = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Timestamp message.
             * @function verify
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Timestamp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Timestamp} Timestamp
             */
            Timestamp.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Timestamp)
                    return object;
                let message = new $root.google.protobuf.Timestamp();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number")
                        message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp} message Timestamp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Timestamp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Timestamp to JSON.
             * @function toJSON
             * @memberof google.protobuf.Timestamp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Timestamp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Timestamp
             * @function getTypeUrl
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Timestamp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.Timestamp";
            };

            return Timestamp;
        })();

        return protobuf;
    })();

    return google;
})();

export { $root as default };
