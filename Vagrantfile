VAGRANTFILE_API_VERSION = "2"

#$bootstrap = <<SCRIPT

#cat <<EOF >> /etc/udev/rules.d/android.rules
#SUBSYSTEM=="usb", ATTR{idVendor}=="04e8", MODE="0666", GROUP="vagrant"
#EOF
#cat <<EOF >> /etc/udev/rules.d/51-android.rules
#SUBSYSTEM=="usb", ATTR{idVendor}=="04e8", MODE="0666", GROUP="vagrant"
#EOF
#chmod a+r /etc/udev/rules.d/android.rules
#chmod a+r /etc/udev/rules.d/51-android.rules
#service udev restart

#SCRIPT 

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
    config.vm.box = "ubuntu/trusty32"

    #config.vm.provision "shell", inline: $bootstrap

    config.vm.network "forwarded_port", guest: 8100, host: 8100
    config.vm.network "forwarded_port", guest: 35729, host: 35729
    config.vm.network "forwarded_port", guest: 3000, host: 3000

    config.vm.synced_folder ".", "/home/vagrant/records"

    config.vm.provision "ansible" do |ansible|
        ansible.playbook = "ansible/playbook.yml"
        ansible.raw_arguments = ['-v']
    end

    config.vm.provider "virtualbox" do |vb|
        vb.customize ["modifyvm", :id, "--vram", "128"]
        vb.customize ["modifyvm", :id, "--usb", "on"]
        vb.customize ["usbfilter", "add", "0", "--target", :id, "--name", "androidSamsung", "--vendorid", "0x04e8"]
        vb.name = "IonicBox"
        vb.memory = 2048
        vb.cpus = 2
    end
end

