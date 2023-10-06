function parseUrl(url) {
    const href = url;
    console.log(url)
    const protocolIndex = url.indexOf('://');
    
    const protocol = url.substring(0, protocolIndex + 1);
    url = url.substring(protocolIndex + 3);
    console.log(url)
    const hashIndex = url.indexOf('#');
    const hash = hashIndex !== -1 ? url.substring(hashIndex) : '';
    url = hashIndex !== -1 ? url.substring(0, hashIndex) : url;
  
    const pathIndex = url.indexOf('/');
    const host = url.substring(0, pathIndex !== -1 ? pathIndex : url.length);
  
    const portIndex = host.indexOf(':');
    const hostname = portIndex !== -1 ? host.substring(0, portIndex) : host;
    const port = portIndex !== -1 ? host.substring(portIndex + 1) : '';
  
    const pathname = url.substring(host.length, url.indexOf("?"));
  
    const origin = protocol + '//' + host;
  
    return {
      href: href,
      protocol: protocol,
      hostname: hostname,
      port: port,
      host: host,
      hash: hash,
      pathname: pathname,
      origin: origin
    };
  }
  
  let a = parseUrl('http://sys.it-co.ru:8080/do/any.php?a=1&b[]=a&b[]=b#foo')
  
  console.log( a.href == "http://sys.it-co.ru:8080/do/any.php?a=1&b[]=a&b[]=b#foo" )
  console.log( a.hash == "#foo" )
  console.log( a.port == "8080" )
  console.log( a.host == "sys.it-co.ru:8080" )
  console.log( a.protocol == "http:" )
  console.log( a.hostname == "sys.it-co.ru" )
  console.log( a.pathname == "/do/any.php" )
  console.log( a.origin == "http://sys.it-co.ru:8080" )