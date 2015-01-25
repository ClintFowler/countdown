<?php

if (PHP_SAPI !== 'cli') {
    die (PHP_EOL.'Please run '.__FILE__.' from the command-line.'.PHP_EOL.PHP_EOL);
}

function countdown($seconds)
{
    while($seconds > 0)
    {
        echo $seconds."\n";
        $seconds -= 1;
        sleep(1);
    }
}

countdown(5);

die('0 All done...');