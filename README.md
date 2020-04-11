# websocket-practice
Practicing websocket.

---

## WebSocket

Bidirectional communication technology.Enables web pages to use the WebSockets protocol for **two-way communication** with a remote host. Operates through a single socket over the Web. **Reduction in unnecessary network traffic and latency.**

One of the more unique features WebSockets provide is its ability to traverse firewalls and proxies, a problem area for many applications. A WebSocket detects the presence of a proxy server and automatically sets up a tunnel to pass through the proxy. The tunnel is established by issuing an HTTP CONNECT statement to the proxy server, which requests for the proxy server to open a TCP/IP connection to a specific host and port.

## Websocket Protocol

The browser sends a request to the server, indicating that it wants to switch protocols from HTTP to WebSocket.

```
GET ws://echo.websocket.org/?encoding=text HTTP/1.1
Origin: http://websocket.org
Cookie: __utma=99as
Connection: Upgrade
Host: echo.websocket.org
Sec-WebSocket-Key: uRovscZjNol/umbTt5uKmw==
Upgrade: websocket
Sec-WebSocket-Version: 13
```

If the server understands the WebSocket protocol, it agrees to the protocol switch through the Upgrade header.

```
HTTP/1.1 101 WebSocket Protocol Handshake
Date: Fri, 10 Feb 2012 17:38:18 GMT
Connection: Upgrade
Server: Kaazing Gateway
Upgrade: WebSocket
Access-Control-Allow-Origin: http://websocket.org
Access-Control-Allow-Credentials: true
Sec-WebSocket-Accept: rLHCkw/SKsO9GAH/ZSFhBATDKrU=
Access-Control-Allow-Headers: content-type
```

At this point the HTTP connection breaks down and is replaced by the WebSocket connection over the same underlying TCP/IP connection. **The WebSocket connection uses the same ports as HTTP (80) and HTTPS (443)**, by default.

![WebSocketFrame](https://www.websocket.org/img/WebSocketFrame.png)

### WebSocket Interface

```
interface WebSocket {
  readonly attribute DOMString URL;
  // ready state
  const unsigned short CONNECTING = 0;
  const unsigned short OPEN = 1;
  const unsigned short CLOSED = 2;
  readonly attribute unsigned short readyState;
  readonly attribute unsigned long bufferedAmount;

  // networking
  attribute Function onopen;
  attribute Function onmessage;
  attribute Function onclose;
  boolean send(in DOMString data);
  void close();
};
WebSocket implements EventTarget;
```

To connect to an end-point, just create a new WebSocket instance, providing the new object with a URL that represents the end-point to which you wish to connect, as shown in the following example. **Note that a ws:// and wss:// prefix are proposed to indicate a WebSocket and a secure WebSocket connection, respectively.**

```
var myWebSocket = new WebSocket("ws://www.websockets.org");
```

A WebSocket connection is established by **upgrading from the HTTP protocol** to the WebSockets protocol during the initial handshake between the client and the server. The connection itself is exposed via the "onmessage" and "send" functions defined by the WebSocket interface.

Before connecting to an end-point and sending a message, you can associate a series of event listeners to handle each phase of the connection life-cycle as shown in the following example.

```
myWebSocket.onopen = function(evt) { alert("Connection open ..."); };
myWebSocket.onmessage = function(evt) { alert( "Received Message: " + evt.data); };
myWebSocket.onclose = function(evt) { alert("Connection closed."); };      
```

To send a message to the server, simply call "send" and provide the content you wish to deliver. After sending the message, call "close" to terminate the connection, as shown in the following example. As you can see, it really couldn't be much easier.

```
myWebSocket.send("Hello WebSockets!");
myWebSocket.close();
```

---

## Reference

[www.websocket.org](https://www.websocket.org/aboutwebsocket.html)
