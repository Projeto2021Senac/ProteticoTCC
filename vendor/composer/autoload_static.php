<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit6bfc2142ccdfafe615c5fecc10b8cafa
{
    public static $prefixLengthsPsr4 = array (
        'C' => 
        array (
            'Classes\\' => 8,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Classes\\' => 
        array (
            0 => __DIR__ . '/../..' . '/classes',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit6bfc2142ccdfafe615c5fecc10b8cafa::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit6bfc2142ccdfafe615c5fecc10b8cafa::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit6bfc2142ccdfafe615c5fecc10b8cafa::$classMap;

        }, null, ClassLoader::class);
    }
}
