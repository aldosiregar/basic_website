//javascript reserve word
/**
 * pada javascript, kita tidak bisa menggunakan beberapa reserved words ini 
 * sebagai nama variable, label, atau fungsi 
 * 
 * abstract	    arguments	await*	        boolean
 * break	    byte	    case	        catch
 * char	        class*	    const*	        continue
 * debugger	    default	    delete	        do
 * double	    else	    enum*	        eval
 * export*	    extends*	false	        final
 * finally	    float	    for	            function
 * goto	        if	        implements	    import*
 * in	        instanceof	int	            interface
 * let*	        long	    native	        new
 * null	        package	    private	        protected
 * public	    return	    short	        static
 * super*	    switch	    synchronized	this
 * throw	    throws	    transient	    true
 * try	        typeof	    var	            void
 * volatile	    while	    with	        yield
 * 
 * kata yang ditandai dengan * baru ditambahkan pada ECMAScript 5 
 * dan ECMAScript 6
 */

//removed reserved words
/**
 * ada juga beberapa reserved word yang dikeluarkan dari standar
 * ECMAScript 5/6
 * 
 * abstract	    boolean	    byte	    char
 * double	    final	    float	    goto
 * int	        long	    native	    short
 * synchronized	throws	    transient	volatile
 * 
 * tetapi jangan menggunakan word diatas sebagai variable, karena
 * belum semua browser mendukung ECMAScript 5/6
 */

//javascript objects, properties, dan methods
/**
 * kita juga harus menghindari menggunakan nama dari 
 * javascript built-in objects, properties, dan methods
 * 
 * Array	        Date	    eval	    function
 * hasOwnProperty	Infinity	isFinite	isNaN
 * isPrototypeOf	length	    Math	    NaN
 * name	            Number	    Object	    prototype
 * String	        toString	undefined	valueOf
 */

//java reserved words
/**
 * javascript juga sering digunakan bersamaan dengan java. kita juga harus
 * menghindari menggunakan beberapa object java dan properties sebagai
 * javascript identifiers
 * 
 * getClass	    java	    JavaArray	javaClass
 * JavaObject	JavaPackage
 */

//other reserved words
/**
 * javascript juga dapat digunakan sebagai bahasa pemrograman di banyak
 * aplikasi
 * 
 * kita harus menghindari menggunakan nama HTML dan window objects dan 
 * properties
 * 
 * alert	    all	                anchor	            anchors
 * area	        assign	            blur	            button
 * checkbox	    clearInterval	    clearTimeout	    clientInformation
 * close	    closed	            confirm	            constructor
 * crypto	    decodeURI	        decodeURIComponent	defaultStatus
 * document	    element	            elements	        embed
 * embeds	    encodeURI	        encodeURIComponent	escape
 * event	    fileUpload	        focus	            form
 * forms	    frame	            innerHeight	        innerWidth
 * layer	    layers	            link	            location
 * mimeTypes	navigate	        navigator	        frames
 * frameRate	hidden	            history	            image
 * images	    offscreenBuffering	open	            opener
 * option	    outerHeight	        outerWidth	        packages
 * pageXOffset	pageYOffset	        parent	            parseFloat
 * parseInt	    password	        pkcs11	            plugin
 * prompt	    propertyIsEnum	    radio	            reset
 * screenX	    screenY	            scroll	            secure
 * select	    self	            setInterval	        setTimeout
 * status	    submit	            taint	            text
 * textarea	    top	                unescape	        untaint
 * window		
 */

//HTML event handlers
/**
 * ditambah juga kita harus menghindari menggunakan nama dari
 * semua HTML event handlers
 * 
 * contohnya :
 * onblur	    onclick	    onerror	    onfocus
 * onkeydown	onkeypress	onkeyup	    onmouseover
 * onload	    onmouseup	onmousedown	onsubmit
 */